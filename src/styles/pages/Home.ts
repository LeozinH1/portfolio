import styled from "styled-components";
import { Container } from "../layout";

export const HomeContent = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: column;
`;

export const Header = styled.div`
  ${Container} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100px;
  }

  @media screen and (max-width: 800px) {
    ${Container} {
      position: fixed;
      left: 0;
      right: 0;
      height: 80px;
      background: ${(props) => props.theme.colors.background};
      z-index: 1;
      margin: 0;
      padding: 20px;
    }
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
    position: relative;
    display: flex;
    list-style: none;

    li {
      list-style-type: none;
      display: flex;
      align-items: center;

      &.slider {
        position: absolute;
        display: inline-block;
        height: 0.4em;
        transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1.05);
        bottom: 0px;
        height: 100%;
        border-radius: 5px;
        background-color: ${(props) => props.theme.colors.gray1};
        z-index: 2;
        width: 20px;
      }

      a {
        position: relative;
        display: inline-block;
        padding: 0.7em 1.5em;
        height: 100%;
        width: 100%;
        z-index: 3;
      }
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

        &.slider {
          display: none;
        }

        a {
          display: block;
          border-radius: 5px;

          &:hover {
            background: rgba(255, 255, 255, 0.1);
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

export const Main = styled.div`
  flex-grow: 1;

  ${Container} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (max-width: 800px) {
    ${Container} {
      flex-flow: column-reverse;
      margin-top: 80px; // Header Height
    }
  }
`;

export const HomeText = styled.div`
  flex: 1;
  p,
  p span {
    font-size: 4rem;
    font-weight: 800;
  }

  p {
    span {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  @media screen and (max-width: 800px) {
    p,
    p span {
      font-size: 3rem;
      text-align: center;
      margin-top: 40px;
    }

    p {
      max-width: 500px;
    }
  }
`;

export const HomeArt = styled.div`
  position: relative;
  flex: 1;
  height: 70%;
  width: 100%;

  @media screen and (max-width: 800px) {
    flex: inherit;
    height: 30%;
  }
`;

export const Waves = styled.div`
  position: relative;
`;
