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
        </Container>

        <HomeImage></HomeImage>
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
