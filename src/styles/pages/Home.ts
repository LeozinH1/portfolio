import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;

  ul {
    list-style-type: none;
    li {
      display: inline;
      padding: 10px;
      a {
        transition: 0.1s;
        display: inline-block;
        position: relative;

        &:hover:after {
          content: "";
          width: 80%;
          height: 2px;
          background: ${(props) => props.theme.colors.primary};
          display: block;
          position: absolute;
          margin-top: 5px;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
  }
`;

export const HomeText = styled.div`
  font-size: 4.5rem;
  font-weight: 800;
  width: 800px;
  line-height: 80px;

  span {
    color: ${(props) => props.theme.colors.primary};
    font-size: 3.5rem;
    font-weight: 800;
  }
`;

export const HomeImage = styled.div``;

export const Logo = styled.h1`
  > a {
    font-size: 1.3rem;
    font-weight: 800;

    > span {
      color: ${(props) => props.theme.colors.gray4};
      font-size: 1.3rem;
      font-weight: 600;
    }
  }
`;

export const HomeContent = styled.div`
  height: 100vh;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  img {
    position: absolute;
    bottom: 0;
  }
`;
