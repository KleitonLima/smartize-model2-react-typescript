import { ButtonHTMLAttributes } from "react";
import * as Styled from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: "disable" | "cancel";
  size?: "tiny" | "small" | "large";
}

const Button = ({ text, variant, size, ...props }: ButtonProps) => {
  return (
    <Styled.StyledButton {...props} variant={variant} size={size}>
      {text}
    </Styled.StyledButton>
  );
};

export default Button;
