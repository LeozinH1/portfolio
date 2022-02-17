import { ButtonHTMLAttributes } from "react";
import { ButtonStyle } from "./style";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <ButtonStyle {...rest}>{children}</ButtonStyle>;
};

export default Button;
