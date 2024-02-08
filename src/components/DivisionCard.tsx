import styled from "styled-components"
import DoctorCard, { TTimeRange } from "./DoctorCard"
import DoctorSpecialty from "./DoctorSpecialty"

const StyledDivisionCard = styled.div`
   margin: 0;
`

export type TDivisionCards = {
   name: string;
   cabinet: string;
   id: string;
   time_table: TTimeRange[];
}

type TAssembledDivisionCards = {
   item: TDivisionCards[],
   specialty: string
}

const DivisionCard: React.FC<TAssembledDivisionCards> = ({ item, specialty }) => {

   console.log('Перерендер DivisionCard')

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