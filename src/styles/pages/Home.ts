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
      background: ${(props) => props.theme.colors.background};
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
    font-size: 3.5rem;
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
      font-size: 2.4rem;
      text-align: center;
      margin-top: 40px;
    }

    p {
      max-width: 500px;
    }
  }
`;

export const HomeArt = styled.div`
  flex: 1;
  height: 70%;
  width: 100%;

  // Tilt
  > div {
    width: 100%;
    height: 100%;
    position: relative;
  }

  @media screen and (max-width: 800px) {
    flex: inherit;
    height: 50%;
  }
`;

export const Waves = styled.div`
  position: relative;
`;

export const SectionAbout = styled.section``;

export const SectionTitle = styled.h1`
  text-align: center;
  margin: 100px 0;
  font-size: 2.5rem;
  font-weight: 700;
`;

export const AboutContent = styled.div``;

export const About = styled.div`
  display: flex;
`;

export const AboutTimeline = styled.div`
  margin-top: 100px;
  display: flex;

  ul {
    list-style-type: none;
    position: relative;
    margin-right: 50px;

    &:after {
      content: "";
      width: 1px;
      height: 100%;
      background: ${(props) => props.theme.colors.gray1};
      display: block;
      position: absolute;
      right: -13px;
      top: 0;
    }

    li {
      padding: 10px;
      width: 300px;
      text-align: right;
      position: relative;
      color: ${(props) => props.theme.colors.gray4};

      &:after {
        content: "";
        width: 15px;
        height: 15px;
        background: ${(props) => props.theme.colors.gray1};
        display: block;
        position: absolute;
        border-radius: 50%;
        right: -20px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 2;
      }

      &:hover {
        background: ${(props) => props.theme.colors.gray1};
        cursor: pointer;
        border-radius: 5px;
        color: ${(props) => props.theme.colors.text};

        &:after {
          background: ${(props) => props.theme.colors.primary};
        }
      }

      h2 {
        font-weight: 700;
        font-size: 1.3rem;
      }
      span {
      }
    }
  }
`;

export const AboutText = styled.div`
  width: 50%;
  color: ${(props) => props.theme.colors.gray4};
  line-height: 2rem;
  text-align: justify;
`;

export const AboutArt = styled.div`
  position: relative;
  width: 50%;
  height: 300px;
`;

export const SectionSkills = styled.div`
  background: ${(props) => props.theme.colors.gray0};
  border-top: 1px solid ${(props) => props.theme.colors.gray2};
  border-bottom: 1px solid ${(props) => props.theme.colors.gray2};
  margin-top: 50px;

  ${Container} {
    ${SectionTitle} {
      margin-top: 50px;
    }
  }
`;

export const TimeLineText = styled.div`
  h2 {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 20px;
  }

  p {
    color: ${(props) => props.theme.colors.gray4};
    line-height: 2rem;
    text-align: justify;
  }
`;

export const SkillsContent = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 50px;

  div {
    flex: 1;
  }
`;

type SkillProps = {
  percentage: string;
};

export const Skill = styled.div<SkillProps>`
  h2 {
    font-size: 1rem;
    font-weight: bold;
  }

  margin-bottom: 20px;

  div {
    width: 100%;
    height: 5px;
    background: ${(props) => props.theme.colors.gray1};
    border-radius: 5px;
    position: relative;

    &:after {
      content: "";
      display: block;
      height: 100%;
      width: ${(props) => props.percentage};
      background: ${(props) => props.theme.colors.primary};
      border-radius: 5px;
    }
  }
`;

export const SectionContact = styled.section`
  ${Container} {
    ${SectionTitle} {
      margin-top: 50px;
    }
  }
`;

export const ContactContent = styled.div`
  max-width: 70%;
  margin: 0 auto;

  form {
    text-align: center;
  }
`;

export const Social = styled.div`
  margin: 100px 0;
  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    position: relative;

    &:after,
    &:before {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      background: ${(props) => props.theme.colors.gray1};
    }

    li {
      display: inline-block;

      a {
        display: block;
        width: 80px;
        height: 80px;
        background: ${(props) => props.theme.colors.gray1};
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
          background: ${(props) => props.theme.colors.gray0};
        }
      }
    }
  }
`;

export const Footer = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.gray0};
`;
