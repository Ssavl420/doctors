import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Label from './Label';

const dateFormat:string = 'd MMM HH:mm';

const StyledDateTime = styled.div`
   font-size: 20px;
   font-weight: 500;
   text-align: end;
   color: white;
   @media (max-width: 567px) {
      font-size: 18px;
   }
`;

const DateTime = () => {
   const [currentDate, setCurrentDate] = useState(new Date());

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentDate(new Date());
      }, 1000);

      return () => {
         clearInterval(interval);
      };
   }, []);

   const formattedDate = format(currentDate, dateFormat, { locale: ru });

   return (
      <Label
         text={'Текущая дата и время'}>
         <StyledDateTime>
            {formattedDate}
         </StyledDateTime>
      </Label>
   )
};

export default DateTime;