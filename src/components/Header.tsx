import styled from "styled-components";
import DateTime from './DateTime';
import User from './User';

const HeaderStyle = styled.header`
   margin-bottom: 20px;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

const Header: React.FC = () => {


   return (
      <HeaderStyle>
         <User />
         <DateTime />
      </HeaderStyle>
   )
}

export default Header;