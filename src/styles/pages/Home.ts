import styled from "styled-components";
import { Container } from "../layout";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
`;

export const Logo = styled.div`
  a,
  a span {
    font-weight: 800;
    font-size: 1.5rem;
  }
`;

export const ToggleNav = styled.div`
  display: none;
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
    ul {
      display: none;
    }

    ${ToggleNav} {
      display: block;
    }
  }
`;

export const HomeContent = styled.div`
  height: 100vh;
  position: relative;

  ${Container} {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const HomeText = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

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

export const Blank = styled.div`
  height: 250px; // Waves height
`;
