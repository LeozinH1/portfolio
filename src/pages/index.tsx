import type { NextPage } from "next";
import {
  Header,
  HomeText,
  Logo,
  HomeContent,
  HomeImage,
} from "../styles/pages/Home";
import Head from "next/head";
import Link from "next/link";
import { Container } from "../styles/layout";
import Button1 from "../components/Button1";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Leozin - Web Developer</title>
      </Head>
      <Container>
        <HomeContent>
          <Header>
            <Logo>
              <Link href="">
                <a>
                  <span>{"< "}</span>LEOZIN.DEV<span>{" />"}</span>
                </a>
              </Link>
            </Logo>
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
                <Link href="">
                  <a>github</a>
                </Link>
              </li>
              <li>
                <Button1>contato</Button1>
              </li>
            </ul>
          </Header>

          <HomeText>
            Oi, bem vindo ao meu <span>portfólio</span> :p
          </HomeText>

          <HomeImage>#IMAGE</HomeImage>
        </HomeContent>
      </Container>

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
