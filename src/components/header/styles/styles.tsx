import styled from "styled-components";

export const HeaderStyle = styled.header`
   margin-bottom: 20px;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

export const StyledUser = styled.h2`
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

export const StyledDateTime = styled.div`
   font-size: 20px;
   font-weight: 500;
   text-align: end;
   color: white;
   @media (max-width: 567px) {
      font-size: 18px;
   }
`;
