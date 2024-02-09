import axios from 'axios';
import { endOfWeek, format, startOfWeek } from 'date-fns';
import { useEffect, useState } from 'react';
import DivisionTitle from './DivisionTitle';
import DivisionCard from './divisionCard/DivisionCard';
import ScheduleRange from './ScheduleRange';
import { StyledLoading, StyledDivisionsCardWrap, StyledDivisionCardWrap } from './styles/styles';
import { TDoctorListProps, TDivisionInfoProps, TDivisionType, TDivision } from './types/types';
import { TTimeRange } from './divisionCard/types/types';

const currentDate: Date = new Date();
const dateFormat: string = 'dd.MM.yyyy';
const startOfWeekDate: Date = startOfWeek(currentDate, { weekStartsOn: 1 });
const endOfWeekDate: Date = endOfWeek(currentDate, { weekStartsOn: 1 });
const formattedStartDate: string = format(startOfWeekDate, dateFormat);
const formattedEndDate: string = format(endOfWeekDate, dateFormat);
export const date_begin: string = formattedStartDate;
export const date_end: string = formattedEndDate;
export const specialtyOphthalmologist: string = "Врач-офтальмолог";
export const specialtyLor: string = "Врач-оториноларинголог";

//-------------------------------------------------------------------------------------------------

const DoctorList: React.FC<TDoctorListProps> = ({ selectedLpuId }) => {

   const [lpuDoctors, setLpuDoctors] = useState<TDivisionInfoProps[]>([]);
   const [divisionsID, setDivisionsID] = useState([]);
   const [loading, setLoading] = useState(false);
   const lpuID: string = selectedLpuId;

   useEffect(() => {
      fetchDivision();
   }, [selectedLpuId]);

   useEffect(() => {
      if (divisionsID.length > 0) {
         setLoading(true);
         fetchData();
      }
   }, [divisionsID]);

   useEffect(() => {
      scheduleLpuDoctors(lpuDoctors)
   }, [lpuDoctors])

   const fetchDivision = async () => {
      if (selectedLpuId === null) return
      setLoading(true);
      try {
         const divisionData = await axios.get(`https://reg.nso.ru/rpc/er/lpu`, {
            params: {
               type: 'divs',
               lpu: selectedLpuId,
            }
         })
         setDivisionsID(divisionData.data.response.LPU);
         setLoading(false);
      }
      catch (error) {
         console.error('Error fetching divisionData', error);
         alert('Error fetching divisionData: ' + error);
      }
   }

   const fetchData = async () => {

      try {
         const requests = divisionsID.map(async (division: TDivisionType): Promise<TDivisionInfoProps> => {

            const divisionInfo = {
               divisionId: division.id,
               divisionName: division.lpu_name,
               divisionAddress: division.address,
               divisionForKids: division.for_kids,
            };

            const { divisionId, divisionName, divisionAddress, divisionForKids } = divisionInfo;

            const doctorData = await axios.get(`https://reg.nso.ru/rpc/er/schedule_data`, {
               params: {
                  lpu: lpuID,
                  busy: 'false',
                  division: divisionId,
                  resource: 'null',
                  date_begin: date_begin,
                  date_end: date_end,
                  ex_system: 'mis_bars',
               }
            });

            return {
               divisionId,
               divisionName,
               divisionAddress,
               divisionForKids,
               doctors: doctorData.data.response,
            };
         });

         const allDoctorsFromLpu = await Promise.all(requests);
         setLpuDoctors(allDoctorsFromLpu);

         setLoading(false);
      } catch (error) {
         console.error('Error fetching data:', error);
         alert('Error fetching data:' + error);
      }
   };

   function scheduleLpuDoctors(lpuDoctors: TDivisionInfoProps[]): TDivision[] {

      const divisions = lpuDoctors.map(obj => {

         // Расписание работы доктора
         const timeTableDoctor = (id: string) => {

            const result = [];

            for (let day = 1; day <= 5; day++) {
               const arr: TTimeRange[] = obj.doctors.times.filter((obj: { EMPLOYER_ID: string; DAY_NUMBER: string; }) => {
                  return obj.EMPLOYER_ID === id && obj.DAY_NUMBER === String(day);
               }).map((obj: { TIME_BEGIN_S: string; TIME_END_S: string; }) => {
                  return {
                     day_number: String(day),
                     time_start: obj.TIME_BEGIN_S,
                     time_end: obj.TIME_END_S,
                  };
               });

               result.push(...arr);
            }

            result.sort((a, b) => {
               const timeA = new Date('2024/01/01 ' + a.time_start.padStart(8, '0'));
               const timeB = new Date('2024/01/01 ' + b.time_start.padStart(8, '0'));
               return timeA.getTime() - timeB.getTime();
            });

            return {
               result
            }
         };

         const filterDoctors = (specialty: string): { name: string, cabinet: string, id: string, time_table: TTimeRange[] }[] => {
            const key: string = "EMP_ID";
            const doctorsWithSpecialty = obj.doctors.resources.filter((doctor: { EMP_SPEC: string }) => doctor.EMP_SPEC === specialty);

            function getUniqueDoctors(arr: { [key: string]: string | number }[], key: string) {
               return arr.reduce((acc: { [key: string]: any }, doctor: { [key: string]: string | number }) => {

                  if (!acc[doctor[key]]) {
                     acc[doctor[key]] = doctor;
                  }
                  return acc;
               }, {});
            }

            return Object.values(getUniqueDoctors(doctorsWithSpecialty, key)).map((doctor: { EMP_NAME: string, CAB_NAME: string, EMP_ID: string }) => {

               const { EMP_NAME, CAB_NAME, EMP_ID } = doctor;
               const cabinetNumber = CAB_NAME.replace(/[^0-9]/g, '');
               const cabinet = `${cabinetNumber} каб.`;
               const timeTable = timeTableDoctor(EMP_ID).result;

               return {
                  name: EMP_NAME,
                  cabinet: cabinet,
                  id: EMP_ID,
                  time_table: timeTable,
               };
            });
         };

         return {
            id: obj.divisionId,
            division: obj.divisionName,
            address: obj.divisionAddress,
            for_kids: obj.divisionForKids,
            doctors: {
               ophthalmologists: obj.divisionForKids === "0" ? filterDoctors(specialtyOphthalmologist) : undefined,
               otorhinolaryngologists: filterDoctors(specialtyLor)
            }
         };
      });
      return divisions
   }


   if (loading) {
      return <StyledLoading>Загрузка данных...</StyledLoading>;
   }

   const shouldRenderDivisionCard = (
      item: TDivision) => {
      if (
         (item.for_kids === '1' &&
            (!item.doctors.ophthalmologists || item.doctors.ophthalmologists.length === 0) &&
            (!item.doctors.otorhinolaryngologists || item.doctors.otorhinolaryngologists.length === 0))
         ||
         (item.for_kids === '0' &&
            (!item.doctors.ophthalmologists || item.doctors.ophthalmologists.length === 0) &&
            (!item.doctors.otorhinolaryngologists || item.doctors.otorhinolaryngologists.length === 0))
      ) {
         return false;
      }
      return true;
   };

   return (
      <>
         {lpuDoctors.length > 0 ? <ScheduleRange date_begin={date_begin} date_end={date_end} /> : null}
         <StyledDivisionsCardWrap>
            {scheduleLpuDoctors(lpuDoctors).map((item) => {
               if (!shouldRenderDivisionCard(item)) return null
               return (
                  <StyledDivisionCardWrap key={item.id} id={item.id}>
                     <DivisionTitle item={item} />
                     {item.doctors.ophthalmologists && item.doctors.ophthalmologists.length > 0 && (
                        <DivisionCard item={item.doctors.ophthalmologists} specialty={specialtyOphthalmologist} />
                     )}
                     {item.doctors.otorhinolaryngologists && item.doctors.otorhinolaryngologists.length > 0 && (
                        <DivisionCard item={item.doctors.otorhinolaryngologists} specialty={specialtyLor} />
                     )}
                  </StyledDivisionCardWrap>
               );
            })}
         </StyledDivisionsCardWrap>
      </>
   );
};

export default DoctorList;