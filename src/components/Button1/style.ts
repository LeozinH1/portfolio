import styled from "styled-components";

export const ButtonStyle = styled.button`
  transition: 0.1s;
  padding: 13px 35px;
  border: 1px solid ${(props) => props.theme.colors.gray3};
  background: none;
  color: ${(props) => props.theme.colors.text};
  border-radius: 4px;
  font-size: 0.9rem;

  &:hover {
    filter: grayscale(0.2);
    box-shadow: 0px 0px 8px ${(props) => props.theme.colors.gray2};
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
