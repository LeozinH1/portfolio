import styled from "styled-components";
import { ErrorOutline } from "styled-icons/material";

export const InputStyle = styled.input`
  width: 100%;
  border: 1px solid #d8d8d8;
  font-size: 13px;

  background-color: ${(props) => props.theme.colors.gray0};
  border: none;
  padding: 20px;
  color: ${(props) => props.theme.colors.text};
  transition: 0.2s;
  border-radius: 4px;
  padding-right: 50px;

  &:focus {
    outline: none;
    border: none;
    box-shadow: 0 0 0 1pt ${(props) => props.theme.colors.primary};
  }
`;
