import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { ReactNode } from 'react';
import { Tabs } from 'antd';
import styled from "styled-components";

interface TimeTableProps {
   dayOfWeek: string,
   children: ReactNode;
}

const StyledToday = styled.li`
   font-weight: 700;
   :last-child {
      margin-bottom: 0;
   }
`

const StyledLi = styled.li`
   color: grey;
   :last-child {
      margin-bottom: 0;
   }
`

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
      // <Tabs
      //    type="card"
      //    items={new Array(5).fill(null).map((_, i) => {
      //       const id = String(i + 1);
      //       return {
      //          label: { dayOfWeek },
      //          key: id,
      //          children: { children },
      //       };
      //    })}
      // />
   )
}

export default TimeTable;
