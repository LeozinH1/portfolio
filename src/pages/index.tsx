import type { NextPage } from "next";
import {
  Header,
  HomeText,
  Logo,
  HomeContent,
  Blank,
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
                  <Link href="https://github.com/LeozinH1">
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

          <Blank />
        </Container>

        <Wave
          fill="#8D1DFC"
          paused={false}
          options={{
            height: 10,
            amplitude: 30,
            speed: 0.15,
            points: 3,
          }}
          opacity="0.7"
          style={{ position: "absolute", bottom: "0px", height: "250px" }}
        />

        <Wave
          fill="#8D1DFC"
          paused={false}
          options={{
            height: 10,
            amplitude: 30,
            speed: 0.15,
            points: 4,
          }}
          opacity="0.5"
          style={{ position: "absolute", bottom: "0px", height: "200px" }}
        />

        <Wave
          fill="#8D1DFC"
          paused={false}
          options={{
            height: 10,
            amplitude: 30,
            speed: 0.15,
            points: 5,
          }}
          opacity="1.0"
          style={{ position: "absolute", bottom: "0px", height: "150px" }}
        />
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
