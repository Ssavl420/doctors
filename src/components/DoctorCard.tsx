import styled from "styled-components"
import TimeTable from "./TimeTable"
import { Key } from "react"
import { date_begin, date_end } from "./DoctorList"

const StyleDoctorCard = styled.div`
   margin-bottom: 20px;
   padding: 20px;
   border: 1px solid grey;
   border-radius: 15px;
   box-shadow: 5px 5px 10px 0px #c7c7c7;
   @media (max-width: 767px) {
      padding: 10px;
   }
`
const StyledDoctorTitle = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   @media (max-width: 767px) {
      p {
         margin: 0;
      }
   }
`
const StyledTimeTable = styled.ul`
   padding: 0px;
   display: flex;
   justify-content: space-between;
   list-style: none;
   gap: 15px;
   @media (max-width: 767px) {
      justify-content: space-between;
      font-size: 10px;
      gap: 10px;
   }
`

type TDoctorCard = {
   specialty: {
      name: string,
      cabinet: string,
      id: string,
      time_table: TTimeRange[],
   }
}

export type TTimeRange = {
   day_number: string;
   time_start: string;
   time_end: string;
}


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