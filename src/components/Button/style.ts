import styled from "styled-components";

export const ButtonStyle = styled.button`
  transition: 0.1s;
  padding: 13px 35px;
  border: none;
  background: none;
  color: ${(props) => props.theme.colors.text};
  border-radius: 4px;
  font-size: 0.9rem;
  background: ${(props) => props.theme.colors.primary};

  &:hover {
    filter: grayscale(0.2);
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.gray2};
    cursor: default;
    color: ${(props) => props.theme.colors.gray4};

    &:hover {
      box-shadow: none;
    }
  }
`;
