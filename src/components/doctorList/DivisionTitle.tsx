import { StyledDivisionTitle } from "./styles/styles"
import { TDivisionTitle } from "./types/types"


const DivisionTitle: React.FC<TDivisionTitle> = ({ item }) => {
   return (
      <>
         <StyledDivisionTitle>
            <h4>{item.division}</h4>
            <p>{item.address}</p>
         </StyledDivisionTitle>
         <hr />
      </>
   )
}

export default DivisionTitle