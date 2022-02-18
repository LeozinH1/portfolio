import type { NextPage } from "next";
import {
  Header,
  HomeText,
  Logo,
  HomeContent,
  HomeImage,
  Navbar,
} from "../styles/pages/Home";
import Head from "next/head";
import Link from "next/link";
import { Container } from "../styles/layout";
import Button1 from "../components/Button1";
import Wave from "react-wavify";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Leozin - Portfólio</title>
      </Head>

      <HomeContent>
        <Container>
          <Header>
            <Logo>
              <Link href="">
                <a>
                  <span>{"< "}</span>LEOZIN.DEV<span>{" />"}</span>
                </a>
              </Link>
            </Logo>

            <Navbar>
              <ul>
                <li>
                  <Link href="">
                    <a>home</a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a>sobre</a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a>skills</a>
                  </Link>
                </li>
                <li>
<<<<<<< Updated upstream
                  <Link href="https://github.com/LeozinH1">
=======
                  <Link href="https://github.com/leozinh1">
>>>>>>> Stashed changes
                    <a target={"_blank"}>github</a>
                  </Link>
                </li>
                <li>
                  <Button1>contato</Button1>
                </li>
              </ul>
            </Navbar>
          </Header>

          <HomeText>
            <p>
              Oi, bem vindo ao meu <span>portfólio</span> :p
            </p>
          </HomeText>
        </Container>

        <HomeImage>
          <Wave
            fill="#8D1DFC"
            paused={false}
            options={{
              height: 10,
              amplitude: 30,
              speed: 0.15,
              points: 5,
            }}
            opacity="0.4"
            style={{ position: "absolute", bottom: "-7px" }}
          />

          <Wave
            fill="#8D1DFC"
            paused={false}
            options={{
              height: 20,
              amplitude: 30,
              speed: 0.17,
              points: 4,
            }}
            opacity="0.5"
            style={{ position: "absolute", bottom: "-7px" }}
          />

          <Wave
            fill="#8D1DFC"
            paused={false}
            options={{
              height: 50,
              amplitude: 30,
              speed: 0.19,
              points: 3,
            }}
            style={{ position: "absolute", bottom: "-7px" }}
          />
        </HomeImage>
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
    </>
  );
};

export default Home;
