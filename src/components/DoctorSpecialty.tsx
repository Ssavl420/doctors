import styled from "styled-components"

const StyledDoctorSpecialty = styled.h5`
   padding: 0;
`

type TDoctorSpecialty = {
   specialty: string,
}

const DoctorSpecialty: React.FC<TDoctorSpecialty> = ({ specialty }) => {
   return (
      <StyledDoctorSpecialty>
         {specialty}:
      </StyledDoctorSpecialty>
   )
}

export default DoctorSpecialty