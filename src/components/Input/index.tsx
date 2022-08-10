import { ChangeEventHandler, InputHTMLAttributes } from "react";
import { StyledInput } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  background: "secondary";
  inputSize: "small" | "large";
}

const Input = ({ background, inputSize, ...props }: InputProps) => {
  return <StyledInput background={background} inputSize={inputSize} {...props} />;
};

export default Input;
