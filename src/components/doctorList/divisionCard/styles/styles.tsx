import styled from "styled-components";

export const StyledDivisionCard = styled.div`
   margin: 0;
`
export const StyledDoctorSpecialty = styled.h5`
   padding: 0;
`
export const StyleDoctorCard = styled.div`
   margin-bottom: 20px;
   padding: 20px;
   border: 1px solid grey;
   border-radius: 15px;
   box-shadow: 5px 5px 10px 0px #c7c7c7;
   @media (max-width: 767px) {
      padding: 10px;
   }
`
export const StyledDoctorTitle = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   @media (max-width: 767px) {
      p {
         margin: 0;
      }
   }
`
export const StyledTimeTable = styled.ul`
   padding: 0px;
   display: flex;
   justify-content: space-between;
   list-style: none;
   gap: 15px;
   @media (max-width: 767px) {
      justify-content: space-between;
      font-size: 10px;
      gap: 10px;
   }
`

export const StyledToday = styled.li`
   font-weight: 700;
   :last-child {
      margin-bottom: 0;
   }
`

export const StyledLi = styled.li`
   color: grey;
   :last-child {
      margin-bottom: 0;
   }
`