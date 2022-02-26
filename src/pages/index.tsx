import type { NextPage } from "next";
import {
  Header,
  HomeText,
  Logo,
  HomeContent,
  Navbar,
  ToggleNav,
  Waves,
  Main,
  HomeArt,
  EmContrucao,
} from "../styles/pages/Home";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../styles/layout";
import Button1 from "../components/Button1";
import Wave from "react-wavify";
import { useCallback, useState, useRef } from "react";

import { Sling as Hamburger } from "hamburger-react";

const Home: NextPage = () => {
  const [navbarClass, setNavbarClass] = useState("");

  const hamburgerClick = useCallback((toggled) => {
    toggled ? setNavbarClass("show") : setNavbarClass("hide");
  }, []);

  const [opacity, setOpacity] = useState(0);
  const [width, setWidth] = useState(0);
  const [left, setLeft] = useState(0);

  const ulnav = useRef<any>(null);

  const mouseOverHandle = (el: any) => {
    const elWidth = el.target?.getBoundingClientRect().width;
    const elLeft =
      el.target?.getBoundingClientRect().left -
      ulnav.current.getBoundingClientRect().left;

    // ulnav.current.offsetLeft

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
              <ul ref={ulnav}>
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

                <li
                  onMouseOver={(el) => mouseOverHandle(el)}
                  onMouseOut={() => mouseOutHandle()}
                >
                  <Link href="">
                    <a>🙋 contato</a>
                  </Link>
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

        <Main>
          <Container>
            <HomeText>
              <p>
                Oi, bem vindo ao meu <span>portfólio</span>.
              </p>
            </HomeText>

            <HomeArt>
              <Image
                src="/art3.png"
                alt="Art"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </HomeArt>
          </Container>
        </Main>

        <Waves>
          <Wave
            fill="#202024"
            paused={false}
            options={{
              height: 10,
              amplitude: 30,
              speed: 0.1,
              points: 3,
            }}
            opacity="0.3"
            style={{ position: "relative", bottom: "0px", height: "200px" }}
          />

          <Wave
            fill="#202024"
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
              height: "150px",
            }}
          />

          <Wave
            fill="#202024"
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
              height: "100px",
            }}
          />
        </Waves>
      </HomeContent>

      <Container>
        <EmContrucao>
          <p>Em construção</p>
          <Image src="/building.svg" alt="Building" width={300} height={300} />
        </EmContrucao>
      </Container>
    </>
  );
};

export default Home;
