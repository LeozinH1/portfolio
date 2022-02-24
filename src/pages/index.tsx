import type { NextPage } from "next";
import {
  Header,
  HomeText,
  Logo,
  HomeContent,
  Navbar,
  ToggleNav,
  Waves,
} from "../styles/pages/Home";
import Head from "next/head";
import Link from "next/link";
import { Container } from "../styles/layout";
import Button1 from "../components/Button1";
import Wave from "react-wavify";
import { useCallback, useState, useRef, LiHTMLAttributes } from "react";

import { Sling as Hamburger } from "hamburger-react";

const Home: NextPage = () => {
  const [navbarClass, setNavbarClass] = useState("");

  const hamburgerClick = useCallback((toggled) => {
    toggled ? setNavbarClass("show") : setNavbarClass("hide");
  }, []);

  const [opacity, setOpacity] = useState(0);
  const [width, setWidth] = useState(0);
  const [left, setLeft] = useState(0);

  const teste = useRef<any>(null);

  const mouseOverHandle = (el: any) => {
    const elWidth = el.target?.getBoundingClientRect().width;
    const elLeft =
      el.target?.getBoundingClientRect().left -
      teste.current.getBoundingClientRect().left;

    // teste.current.offsetLeft

    setOpacity(1);
    setWidth(elWidth);
    setLeft(elLeft);
  };

  const mouseOutHandle = () => {
    setOpacity(0);
  };

  return (
    <>
      <Head>
        <title>Leozin - Portfólio</title>
      </Head>

      <HomeContent>
        <Header>
          <Container>
            <Logo>
              <Link href="">
                <a>
                  <span>{"< "}</span>LEOZIN.DEV<span>{" />"}</span>
                </a>
              </Link>
            </Logo>

            <Navbar className={navbarClass}>
              <ul ref={teste}>
                <li
                  onMouseOver={(el) => mouseOverHandle(el)}
                  onMouseOut={() => mouseOutHandle()}
                >
                  <Link href="">
                    <a>home</a>
                  </Link>
                </li>

                <li
                  onMouseOver={(el) => mouseOverHandle(el)}
                  onMouseOut={() => mouseOutHandle()}
                >
                  <Link href="">
                    <a>sobre</a>
                  </Link>
                </li>

                <li
                  onMouseOver={(el) => mouseOverHandle(el)}
                  onMouseOut={() => mouseOutHandle()}
                >
                  <Link href="">
                    <a>skills</a>
                  </Link>
                </li>

                <li
                  onMouseOver={(el) => mouseOverHandle(el)}
                  onMouseOut={() => mouseOutHandle()}
                >
                  <Link href="https://github.com/LeozinH1">
                    <a target={"_blank"}>github</a>
                  </Link>
                </li>

                <li>
                  <Button1>contato</Button1>
                </li>

                <li
                  className="slider"
                  style={{ width: width, left: left, opacity: opacity }}
                ></li>
              </ul>

              <ToggleNav>
                <Hamburger onToggle={(toggled) => hamburgerClick(toggled)} />
              </ToggleNav>
            </Navbar>
          </Container>
        </Header>

        <HomeText>
          <Container>
            <p>
              Oi, bem vindo ao meu <span>portfólio</span> :p
            </p>
          </Container>
        </HomeText>

        <Waves>
          <Wave
            fill="#8D1DFC"
            paused={false}
            options={{
              height: 10,
              amplitude: 30,
              speed: 0.1,
              points: 3,
            }}
            opacity="0.3"
            style={{ position: "relative", bottom: "0px", height: "250px" }}
          />

          <Wave
            fill="#8D1DFC"
            paused={false}
            options={{
              height: 10,
              amplitude: 30,
              speed: 0.1,
              points: 4,
            }}
            opacity="0.5"
            style={{
              position: "absolute",
              left: "0px",
              bottom: "0px",
              height: "200px",
            }}
          />

          <Wave
            fill="#8D1DFC"
            paused={false}
            options={{
              height: 10,
              amplitude: 30,
              speed: 0.1,
              points: 5,
            }}
            opacity="1.0"
            style={{
              position: "absolute",
              left: "0px",
              bottom: "0px",
              height: "150px",
            }}
          />
        </Waves>
      </HomeContent>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Home;
