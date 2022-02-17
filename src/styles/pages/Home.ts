import styled from "styled-components";
import { Container } from "../layout";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
`;

export const Logo = styled.div`
  a,
  a span {
    font-weight: 800;
    font-size: 1.5rem;
  }
`;

export const Navbar = styled.div`
  ul {
    li {
      list-style-type: none;
      display: inline;
    }

    a {
      padding: 20px;
    }
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const HomeContent = styled.div``;

export const HomeText = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;

  p,
  p span {
    font-size: 4rem;
    font-weight: 800;
  }

  p {
    max-width: 600px;

    span {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export const HomeImage = styled.div`
  height: 30vh;
  background: url("/waves.svg");
  background-repeat: repeat-x;
  background-position: bottom;
`;
