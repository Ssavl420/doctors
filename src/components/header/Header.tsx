import { HeaderStyle } from "./styles/styles";
import User from './User';
import DateTime from './DateTime';



const Header: React.FC = () => {
   return (
      <HeaderStyle>
         <User />
         <DateTime />
      </HeaderStyle>
   )
}

export default Header;