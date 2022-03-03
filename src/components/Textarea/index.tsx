import { TextareaHTMLAttributes, forwardRef } from "react";

import { TextareaStyle } from "./styles";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea: React.FC<TextareaProps> = forwardRef(
  ({ ...props }, ref: React.Ref<HTMLTextAreaElement>) => {
    return <TextareaStyle ref={ref} rows={5} {...props}></TextareaStyle>;
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
