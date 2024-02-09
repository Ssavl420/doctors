import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { StyledToday, StyledLi } from './styles/styles';
import { TimeTableProps } from './types/types';


const TimeTable: React.FC<TimeTableProps> = ({ dayOfWeek, children }) => {

   // День недели на русском языке
   const dayOfWeekInRussian: string = format(new Date(), 'EEEE', { locale: ru });
   const isToday: boolean = dayOfWeekInRussian === dayOfWeek.toLowerCase();

   const Style = isToday ? StyledToday : StyledLi;

   return (
      <Style>
         <p>{dayOfWeek}</p>
         {children}
      </Style>
   )
}

export default TimeTable;
