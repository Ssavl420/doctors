import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { useEffect, useState } from 'react';
import Label from '../label/Label';
import { StyledDateTime } from './styles/styles';

const dateFormat:string = 'd MMM HH:mm';



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