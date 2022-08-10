import { ButtonHTMLAttributes } from "react";
import * as Styled from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: "disable" | "cancel";
  size?: "small" | "large";
}

const Button = ({ text, variant, size }: ButtonProps) => {
  return (
    <Styled.StyledButton variant={variant} size={size}>
      {text}
    </Styled.StyledButton>
  );
};

export default Button;
