import styled from "styled-components";
import { Container } from "../layout";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;

  @media screen and (max-width: 800px) {
    position: fixed;
    left: 0;
    right: 0;
    padding: 0 20px;
    height: 80px;
    background: ${(props) => props.theme.colors.background};
    z-index: 1;
  }
`;

export const Logo = styled.div`
  a,
  a span {
    font-weight: 800;
    font-size: 1.5rem;
    transition: 0.3s;
  }

  &:hover {
    a,
    a span {
      text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
    }
  }
`;

export const ToggleNav = styled.div`
  display: none;
  z-index: 2;
`;

export const Navbar = styled.div`
  @keyframes show {
    0% {
      right: -50%;
    }

    60% {
      right: 0;
    }

    80% {
      right: -8%;
    }

    100% {
      right: 0;
    }
  }

  @keyframes hide {
    from {
      right: 0;
    }
    to {
      right: -50%;
    }
  }

  &.hide {
    ul {
      animation: hide 0.1s linear both;
    }
  }

  &.show {
    ul {
      animation: show 0.3s linear both;
    }
  }

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
      display: block;
      width: 50%;
      position: fixed;
      right: -50%;
      top: 80px; // Header size
      bottom: 0;
      background: rgba(20, 20, 20, 0.85);
      backdrop-filter: blur(2em);
      z-index: 1;
      text-align: center;

      li {
        display: block;
        padding: 10px 30px;

        a {
          display: block;
          border-radius: 5px;

          &:hover {
            background: rgba(0, 0, 0, 0.1);
          }
        }

        button,
        a {
          width: 100%;
        }
      }
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

  @media screen and (max-width: 800px) {
    p,
    p span {
      font-size: 3rem;
    }

    p {
      max-width: 500px;
    }
  }
`;

export const Blank = styled.div`
  height: 250px; // Waves max height
`;
