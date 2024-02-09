import styled from "styled-components"

const StyleScheduleRange = styled.section`
   margin-bottom: 20px;
   p {
      margin: 0;
      font-size: 20px;
      font-weight: 500;
      color: white;
   }
`

type TScheduleRangeProps = {
   date_begin: string;
   date_end: string;
}

const ScheduleRange = ({ date_begin, date_end }: TScheduleRangeProps) => {
   return (
      <StyleScheduleRange>
         <p>Расписание: {date_begin} - {date_end}</p>
      </StyleScheduleRange>
   )
}

export default ScheduleRange