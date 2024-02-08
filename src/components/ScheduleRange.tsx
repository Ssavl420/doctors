import styled from "styled-components"

const StyleScheduleRange = styled.p`
   margin: 0;
`

type TScheduleRangeProps = {
   date_begin: string;
   date_end: string;
}

const ScheduleRange = ({ date_begin, date_end }: TScheduleRangeProps) => {
   return (
      <StyleScheduleRange>
         Расписание: {date_begin} - {date_end}
      </StyleScheduleRange>
   )
}

export default ScheduleRange