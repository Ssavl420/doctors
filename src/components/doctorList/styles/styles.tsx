import styled from "styled-components";

export const StyledLoading = styled.div`
   margin-top: 3em;
   text-align: center;
`
export const StyledDivisionsCardWrap = styled.ul`
   margin-top: 0;
   padding-left: 0;
   display: flex;
   flex-direction: column;
   gap: 30px;
   list-style: none;
   @media (max-width: 767px) {
      padding-top: 30px;
   }
`
export const StyledDivisionCardWrap = styled.li`
   padding: 5px 25px;
   font-weight: 500;
   color: black;
   background: white;
   border-radius: 15px;
   @media (max-width: 767px) {
      padding: 15px;
   }
   hr {
      margin: 0px;
   }
`
export const StyledDivisionTitle = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   @media (max-width: 767px) {
      margin-bottom: 15px;
      flex-direction: column;
      align-items: start;
      h4, p {
         margin: 0;
      }
   }
`