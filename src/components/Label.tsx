import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface LabelProps {
   marginTop?: string;
   text: string,
   children: ReactNode,
};

const StyledLabel = styled.label<{ marginTop?: string }>`
   margin-top: ${({ marginTop }) => marginTop || '0px'};
   display: flex;
   flex-direction: column;
   font-size: 12px;
   color: grey;
`

const Label: React.FC<LabelProps> = ({ text, children, marginTop }) => {
   return (
      <StyledLabel marginTop={marginTop}>
         {text}
         {children}
      </StyledLabel>
   )
}

export default Label



