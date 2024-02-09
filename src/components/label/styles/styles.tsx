import styled from 'styled-components';

export const StyledLabel = styled.label<{ marginTop?: string }>`
   margin-top: ${({ marginTop }) => marginTop || '0px'};
   display: flex;
   flex-direction: column;
   font-size: 12px;
   color: grey;
`