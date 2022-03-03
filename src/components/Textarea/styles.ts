import styled from "styled-components";

export const TextareaStyle = styled.textarea`
  width: 100%;
  height: 100%;
  font-size: 13px;
  padding: 20px;

  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.gray0};
  resize: none;

  border-radius: 4px;

  border: none;
  outline: none;
  transition: 0.2s;

  &:focus {
    box-shadow: 0 0 0 1pt ${(props) => props.theme.colors.primary};
  }
`;
