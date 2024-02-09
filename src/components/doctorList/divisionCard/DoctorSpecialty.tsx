import { StyledDoctorSpecialty } from "./styles/styles"
import { TDoctorSpecialty } from "./types/types"


const DoctorSpecialty: React.FC<TDoctorSpecialty> = ({ specialty }) => {
   return (
      <StyledDoctorSpecialty>
         {specialty}:
      </StyledDoctorSpecialty>
   )
}

export default DoctorSpecialty