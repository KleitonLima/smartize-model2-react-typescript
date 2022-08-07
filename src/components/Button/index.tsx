import * as Styled from "./styles";

interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: "disable" | "cancel" | false;
  size?: "small" | "large" | false;
}

const Button = ({ text, onClick, variant = false, size = false }: ButtonProps) => {
  return <Styled.StyledButton onClick={onClick}>{text}</Styled.StyledButton>;
};

export default Button;
