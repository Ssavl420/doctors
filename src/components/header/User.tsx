
import Label from '../label/Label';
import { StyledUser } from './styles/styles';
import { TypeUser } from './types/types';



const User = () => {
   const user: TypeUser = {
      name: "Оксана",
      surname: "Савлевич",
   };

   const { name, surname } = user;

   return (
      <Label 
         text={'Имя пользователя'} >
         <StyledUser>
            {name} {surname}
         </StyledUser>
      </Label>
   )
}
export default User;