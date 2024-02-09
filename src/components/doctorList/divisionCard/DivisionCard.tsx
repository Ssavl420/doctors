import DoctorCard from "./DoctorCard"
import DoctorSpecialty from "./DoctorSpecialty"
import { StyledDivisionCard } from "./styles/styles";
import { TAssembledDivisionCards } from "./types/types";





const DivisionCard: React.FC<TAssembledDivisionCards> = ({ item, specialty }) => {

   return (
      <StyledDivisionCard>
         <DoctorSpecialty specialty={specialty} />

         {item.map((doctor) => (
            <DoctorCard key={doctor.id} specialty={doctor} />
         ))}

      </StyledDivisionCard>
   )

}

export default DivisionCard