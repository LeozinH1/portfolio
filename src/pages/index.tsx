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
  SectionAbout,
  SectionTitle,
  AboutContent,
  About,
  AboutTimeline,
  AboutText,
  AboutArt,
  SectionSkills,
  TimeLineText,
  SkillsContent,
  Skill,
  SectionContact,
  ContactContent,
  Social,
  Footer,
} from "../styles/pages/Home";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../styles/layout";
import Wave from "react-wavify";
import { useCallback, useState, useRef } from "react";
import Tilt from "react-parallax-tilt";
import { Sling as Hamburger } from "hamburger-react";
import Button from "../components/Button";
import Input from "../components/Input";
import Textarea from "../components/Textarea";

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
              <Tilt
                scale={0.99}
                transitionSpeed={2500}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                tiltAngleYInitial={-5}
              >
                <p>
                  Olá! Me chamo <span>Leonardo</span>, bem vindo ao meu site.
                </p>
              </Tilt>
            </HomeText>

            <HomeArt>
              <Tilt
                scale={0.99}
                transitionSpeed={2500}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                tiltAngleYInitial={5}
              >
                <Image
                  src="/art.png"
                  alt="Art"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />
              </Tilt>
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
        <SectionAbout>
          <SectionTitle>SOBRE MIM</SectionTitle>

          <AboutContent>
            <About>
              <AboutText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                tristique molestie enim in lacinia. Maecenas bibendum vel elit
                ac finibus. Cras dui diam, rutrum lobortis odio a, hendrerit
                dictum ligula. Aenean eu tincidunt nisi. Sed eget tempus mauris,
                in rutrum libero. Mauris scelerisque ultricies odio, in gravida
                mi pellentesque at. Praesent finibus maximus sapien ac porta.
                Cras dapibus mollis accumsan.
              </AboutText>
              <AboutArt>
                <Image
                  src="/about.svg"
                  alt="Art"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="right"
                ></Image>
              </AboutArt>
            </About>
            <AboutTimeline>
              <ul>
                <li>
                  <h2>1998</h2>
                  <span>Spawned in the world</span>
                </li>
                <li>
                  <h2>2004-2012</h2>
                  <span>Ensino Fundamental</span>
                </li>
                <li>
                  <h2>2013-2015</h2>
                  <span>Ensino Médio</span>
                </li>
                <li>
                  <h2>2016-2019</h2>
                  <span>Ensino Superior</span>
                </li>
              </ul>

              <TimeLineText>
                <h2>O COMEÇO DE TUDO</h2>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  tristique molestie enim in lacinia. Maecenas bibendum vel elit
                  ac finibus. Cras dui diam, rutrum lobortis odio a, hendrerit
                  dictum ligula. Aenean eu tincidunt nisi. Sed eget tempus
                  mauris, in rutrum libero. Sed eget tempus mauris, in rutrum
                  libero. Mauris scelerisque ultricies odio, in gravida mi
                  pellentesque at. Praesent finibus maximus sapien ac porta.
                </p>
              </TimeLineText>
            </AboutTimeline>
          </AboutContent>
        </SectionAbout>
      </Container>

      <SectionSkills>
        <Container>
          <SectionTitle>SKILLS</SectionTitle>
          <SkillsContent>
            <div>
              <Skill percentage={"50%"}>
                <h2>HTML & CSS</h2>
                <div></div>
              </Skill>

              <Skill percentage={"90%"}>
                <h2>Javascript</h2>
                <div></div>
              </Skill>

              <Skill percentage={"100%"}>
                <h2>React & Next</h2>
                <div></div>
              </Skill>

              <Skill percentage={"10%"}>
                <h2>React Native</h2>
                <div></div>
              </Skill>
            </div>
            <div>
              <Skill percentage={"10%"}>
                <h2>Node</h2>
                <div></div>
              </Skill>
              <Skill percentage={"10%"}>
                <h2>SQL</h2>
                <div></div>
              </Skill>
              <Skill percentage={"10%"}>
                <h2>NoSQL</h2>
                <div></div>
              </Skill>
              <Skill percentage={"10%"}>
                <h2>Typescript</h2>
                <div></div>
              </Skill>
              <Skill percentage={"10%"}>
                <h2>PHP</h2>
                <div></div>
              </Skill>
              <Skill percentage={"10%"}>
                <h2>Docker</h2>
                <div></div>
              </Skill>
              <Skill percentage={"10%"}>
                <h2>Laravel</h2>
                <div></div>
              </Skill>
              <Skill percentage={"10%"}>
                <h2>Python</h2>
                <div></div>
              </Skill>
            </div>
            <div>
              <Skill percentage={"10%"}>
                <h2>Adobe XD</h2>
                <div></div>
              </Skill>
              <Skill percentage={"10%"}>
                <h2>Github</h2>
                <div></div>
              </Skill>
              <Skill percentage={"10%"}>
                <h2>Adobe Photoshop</h2>
                <div></div>
              </Skill>
              <Skill percentage={"10%"}>
                <h2>Adobe Premiere</h2>
                <div></div>
              </Skill>
            </div>
          </SkillsContent>
        </Container>
      </SectionSkills>

      <SectionContact>
        <Container>
          <SectionTitle>CONTATO</SectionTitle>

          <ContactContent>
            <form>
              <Input type="text" placeholder="Nome completo" />
              <Input type="text" placeholder="Assunto" />
              <Input type="text" placeholder="Email" />
              <Textarea placeholder="Mensagem" />
              <Button>enviar</Button>
            </form>

            <Social>
              <ul>
                <li>
                  <Link href="https://www.linkedin.com/in/leozinh1/">
                    <a target="_blank">
                      <Image
                        src="/linkedin.svg"
                        alt="Linkedin"
                        width={30}
                        height={30}
                      />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/leosj98/">
                    <a target="_blank">
                      {" "}
                      <Image
                        src="/instagram.svg"
                        alt="Instagram"
                        width={30}
                        height={30}
                      />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.facebook.com/leosj1998/">
                    <a target="_blank">
                      {" "}
                      <Image
                        src="/facebook.svg"
                        alt="Facebook"
                        width={30}
                        height={30}
                      />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a target="_blank">
                      {" "}
                      <Image
                        src="/discord.svg"
                        alt="Discord"
                        width={30}
                        height={30}
                      />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/leozinh1">
                    <a target="_blank">
                      {" "}
                      <Image
                        src="/github.svg"
                        alt="Github"
                        width={30}
                        height={30}
                      />
                    </a>
                  </Link>
                </li>
              </ul>
            </Social>
          </ContactContent>
        </Container>
      </SectionContact>

      <Footer>Desenvolvido por Leonardo S. Jaremczuk</Footer>
    </>
  );
};

export default Home;
