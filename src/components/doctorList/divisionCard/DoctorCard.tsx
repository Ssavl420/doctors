import TimeTable from "./TimeTable"
import { Key } from "react"
import { date_begin, date_end } from "../DoctorList"
import { StyleDoctorCard, StyledDoctorTitle, StyledTimeTable } from "./styles/styles"
import { TDoctorCard, TTimeRange } from "./types/types"




const daysOfWeek = [
   {monday: 'Понедельник'},
   {tuesday : 'Вторник'},
   {wednesday : 'Среда'},
   {thursday : 'Четверг'},
   {Friday : 'Пятница'}
]


const DoctorCard: React.FC<TDoctorCard> = ({ specialty }) => {

   const renderTimeTableByDay = (dayNumber: string, timeTable: TTimeRange[]) => {

      return timeTable.map((obj: TTimeRange, index: Key) => {

         if (obj.day_number === dayNumber) {
            return (
               <p key={index}>
                  {obj.time_start} - {obj.time_end}
               </p>
            );
         }
         return null;
      });
   };

   return (
      <StyleDoctorCard>
         <StyledDoctorTitle>
            <p title='ФИО Врача'>
               {specialty.name}
            </p>
            <p title='Кабинет'>
               {specialty?.cabinet}
            </p>
         </StyledDoctorTitle>
         <StyledTimeTable title={`Расписание приема ${specialty.name} c ${date_begin} по ${date_end}`}>
            <TimeTable dayOfWeek={'Понедельник'} >
               {renderTimeTableByDay("1", specialty.time_table)}
            </TimeTable>
            <TimeTable dayOfWeek={'Вторник'} >
               {renderTimeTableByDay("2", specialty.time_table)}
            </TimeTable>
            <TimeTable dayOfWeek={'Среда'} >
               {renderTimeTableByDay("3", specialty.time_table)}
            </TimeTable>
            <TimeTable dayOfWeek={'Четверг'} >
               {renderTimeTableByDay("4", specialty.time_table)}
            </TimeTable>
            <TimeTable dayOfWeek={'Пятница'} >
               {renderTimeTableByDay("5", specialty.time_table)}
            </TimeTable>
         </StyledTimeTable>
      </StyleDoctorCard>
   )
}

export default DoctorCard