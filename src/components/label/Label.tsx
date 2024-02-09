import { StyledLabel } from './styles/styles';
import { LabelProps } from './types/types';


const Label: React.FC<LabelProps> = ({ text, children, marginTop }) => {
   return (
      <StyledLabel marginTop={marginTop}>
         {text}
         {children}
      </StyledLabel>
   )
}

export default Label



