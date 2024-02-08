import styled from 'styled-components';
import Label from './Label';

interface TypeUser {
   name: string;
   surname: string;
};

const StyledH2 = styled.h2`
   margin: 0;
   display: block;
   text-align: start;
   font-size: 20px;
   font-weight: 500;
   color: white;
   @media (max-width: 567px) {
      font-size: 18px;
   }
`;


const User = () => {
   const user: TypeUser = {
      name: "Оксана",
      surname: "Савлевич",
   };

   const { name, surname } = user;

   return (
      <Label 
         text={'Имя пользователя'} >
         <StyledH2>
            {name} {surname}
         </StyledH2>
      </Label>
   )
}
export default User;