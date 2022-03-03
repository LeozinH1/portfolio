import { InputHTMLAttributes, forwardRef } from "react";
import { InputStyle } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = forwardRef(
  ({ children, ...props }, ref: React.Ref<HTMLInputElement>) => {
    return <InputStyle ref={ref} {...props} />;
  }
);

Input.displayName = "Input";

export default Input;
