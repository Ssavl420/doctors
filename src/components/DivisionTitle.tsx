import styled from 'styled-components';

const StyledDivisionTitle = styled.div`
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

type TDivisionTitle = {
   item: {
      division: string,
      address: string
   }
}

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