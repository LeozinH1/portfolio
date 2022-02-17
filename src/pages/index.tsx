import type { NextPage } from "next";
import { Header } from "../styles/pages/Home";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Creators</title>
      </Head>
      <Header>MIAR</Header>
    </>
  );
};

export default Home;
