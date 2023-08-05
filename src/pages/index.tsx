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

import { Javascript, Nodejs, Php } from "@styled-icons/boxicons-logos";
import {
  Mysql,
  Mongodb,
  Typescript,
  Docker,
  Laravel,
  Python,
  Adobexd,
  Git,
  Adobephotoshop,
  Adobepremierepro,
  ReactLogo,
  Html5,
  Css3,
} from "@styled-icons/simple-icons";

import { Vercel } from "@styled-icons/simple-icons";

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
import { Link as LinkAS, animateScroll as scroll } from "react-scroll";

const Home: NextPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Sending");

    let data = {
      name,
      email,
      message,
      subject,
    };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");

      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
      }
    });
  };

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

  const [item1, setItem1] = useState("active");
  const [item2, setItem2] = useState("");
  const [item3, setItem3] = useState("");
  const [item4, setItem4] = useState("");

  const tlclick = (index: number) => {
    setItem1("");
    setItem2("");
    setItem3("");
    setItem4("");

    switch (index) {
      case 1:
        setItem1("active");
        break;

      case 2:
        setItem2("active");
        break;

      case 3:
        setItem3("active");
        break;

      case 4:
        setItem4("active");
        break;
    }
  };

  const [opacity2, setOpacity2] = useState(0);
  const [height, setHeight] = useState(0);
  const [top, setTop] = useState(0);

  const ulnav2 = useRef<any>(null);

  const mouseOverHandle2 = (el: any) => {
    const elHeight = el.target?.getBoundingClientRect().height;
    const elTop =
      el.target?.getBoundingClientRect().top -
      ulnav2.current.getBoundingClientRect().top;

    setOpacity2(1);
    setTop(elTop);
    setHeight(elHeight);
  };

  const mouseOutHandle2 = () => {
    setOpacity2(0);
  };

  const [show, setShow] = useState(false);
  const copyDiscord = () => {
    navigator.clipboard.writeText("leozinh1");
    setShow(true);

    setTimeout(() => {
      setShow(false);
    }, 2000);
  };

  return (
    <>
      <Head>
        <title>Leozin - Portfólio</title>
      </Head>

      <HomeContent id="section1">
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
                  <LinkAS
                    to="section1"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    home
                  </LinkAS>
                </li>

                <li
                  onMouseOver={(el) => mouseOverHandle(el)}
                  onMouseOut={() => mouseOutHandle()}
                >
                  <LinkAS
                    to="section2"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    sobre
                  </LinkAS>
                </li>

                <li
                  onMouseOver={(el) => mouseOverHandle(el)}
                  onMouseOut={() => mouseOutHandle()}
                >
                  <LinkAS
                    to="section3"
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={500}
                  >
                    skills
                  </LinkAS>
                </li>

                <li
                  onMouseOver={(el) => mouseOverHandle(el)}
                  onMouseOut={() => mouseOutHandle()}
                >
                  <LinkAS
                    to="section4"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    🙋 contato
                  </LinkAS>
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

      <Container id="section2">
        <SectionAbout>
          <SectionTitle>SOBRE MIM</SectionTitle>

          <AboutContent>
            <About>
              <AboutText>
                Meu nome é <b>Leonardo</b>, e aos meus <b>25 anos</b>, sou um
                apaixonado por tecnologia e um entusiasta do mundo da
                programação. Como programador <b>full stack</b>, mergulhei nesse
                universo desde meu primeiro contato com o código, e desde então,
                tenho experimentado uma jornada fascinante. Minha paixão por
                explorar novas possibilidades no campo da programação me
                impulsiona todos os dias. Através de projetos desafiadores,
                venho <b>aprimorando minhas habilidades</b> e buscando
                conhecimento para me tornar um profissional cada vez mais
                completo.
              </AboutText>
              <AboutArt>
                <Image
                  src="/about.svg"
                  alt="Art"
                  layout="fill"
                  objectFit="contain"
                ></Image>
              </AboutArt>
            </About>

            <AboutTimeline>
              <ul ref={ulnav2}>
                <li onClick={() => tlclick(1)} className={item1}>
                  <h2>1998</h2>
                  <span>Nascimento</span>

                  <div
                    onMouseEnter={(el) => mouseOverHandle2(el)}
                    onMouseLeave={() => mouseOutHandle2()}
                  />
                </li>

                <li onClick={() => tlclick(2)} className={item2}>
                  <h2>2004-2012</h2>
                  <span>Ensino Fundamental</span>

                  <div
                    onMouseEnter={(el) => mouseOverHandle2(el)}
                    onMouseLeave={() => mouseOutHandle2()}
                  />
                </li>

                <li onClick={() => tlclick(3)} className={item3}>
                  <h2>2013-2015</h2>
                  <span>Ensino Médio</span>

                  <div
                    onMouseEnter={(el) => mouseOverHandle2(el)}
                    onMouseLeave={() => mouseOutHandle2()}
                  />
                </li>

                <li onClick={() => tlclick(4)} className={item4}>
                  <h2>2016-2019</h2>
                  <span>Ensino Superior</span>

                  <div
                    onMouseEnter={(el) => mouseOverHandle2(el)}
                    onMouseLeave={() => mouseOutHandle2()}
                  />
                </li>

                <li
                  className="slider"
                  style={{ height: height, top: top, opacity: opacity2 }}
                ></li>
              </ul>

              <TimeLineText>
                <div className={item1}>
                  <h2>O COMEÇO DE TUDO</h2>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    tristique molestie enim in lacinia. Maecenas bibendum vel
                    elit ac finibus. Cras dui diam, rutrum lobortis odio a,
                    hendrerit dictum ligula. Aenean eu tincidunt nisi. Sed eget
                    tempus mauris, in rutrum libero. Sed eget tempus mauris, in
                    rutrum libero. Mauris scelerisque ultricies odio, in gravida
                    mi pellentesque at. Praesent finibus maximus sapien ac
                    porta.
                  </p>
                </div>

                <div className={item2}>
                  <h2>ENSINO FUNDAMENTAL</h2>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    tristique molestie enim in lacinia. Maecenas bibendum vel
                    elit ac finibus. Cras dui diam, rutrum lobortis odio a,
                    hendrerit dictum ligula. Aenean eu tincidunt nisi. Sed eget
                    tempus mauris, in rutrum libero. Sed eget tempus mauris, in
                    rutrum libero. Mauris scelerisque ultricies odio, in gravida
                    mi pellentesque at. Praesent finibus maximus sapien ac
                    porta.
                  </p>
                </div>

                <div className={item3}>
                  <h2>ENSINO MÉDIO</h2>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    tristique molestie enim in lacinia. Maecenas bibendum vel
                    elit ac finibus. Cras dui diam, rutrum lobortis odio a,
                    hendrerit dictum ligula. Aenean eu tincidunt nisi. Sed eget
                    tempus mauris, in rutrum libero. Sed eget tempus mauris, in
                    rutrum libero. Mauris scelerisque ultricies odio, in gravida
                    mi pellentesque at. Praesent finibus maximus sapien ac
                    porta.
                  </p>
                </div>

                <div className={item4}>
                  <h2>ENSINO SUPERIOR</h2>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    tristique molestie enim in lacinia. Maecenas bibendum vel
                    elit ac finibus. Cras dui diam, rutrum lobortis odio a,
                    hendrerit dictum ligula. Aenean eu tincidunt nisi. Sed eget
                    tempus mauris, in rutrum libero. Sed eget tempus mauris, in
                    rutrum libero. Mauris scelerisque ultricies odio, in gravida
                    mi pellentesque at. Praesent finibus maximus sapien ac
                    porta.
                  </p>
                </div>
              </TimeLineText>
            </AboutTimeline>
          </AboutContent>
        </SectionAbout>
      </Container>

      <SectionSkills id="section3">
        <Container>
          <SectionTitle>SKILLS</SectionTitle>
          <SkillsContent>
            <div>
              <Skill percentage={"95%"}>
                <Html5 />
                <div>
                  <h2>HTML</h2>
                  <div></div>
                </div>
              </Skill>

              <Skill percentage={"95%"}>
                <Css3 />
                <div>
                  <h2>CSS</h2>
                  <div></div>
                </div>
              </Skill>

              <Skill percentage={"90%"}>
                <Javascript />
                <div>
                  <h2>Javascript</h2>
                  <div></div>
                </div>
              </Skill>

              <Skill percentage={"80%"}>
                <ReactLogo />
                <div>
                  <h2>React</h2>
                  <div></div>
                </div>
              </Skill>

              <Skill percentage={"78%"}>
                <Vercel />
                <div>
                  <h2>Next</h2>
                  <div></div>
                </div>
              </Skill>

              <Skill percentage={"15%"}>
                <ReactLogo />
                <div>
                  <h2>React Native</h2>
                  <div></div>
                </div>
              </Skill>
            </div>
            <div>
              <Skill percentage={"95%"}>
                <Nodejs />
                <div>
                  <h2>Node</h2>
                  <div></div>
                </div>
              </Skill>
              <Skill percentage={"90%"}>
                <Mysql />
                <div>
                  <h2>SQL</h2>
                  <div></div>
                </div>
              </Skill>
              <Skill percentage={"87%"}>
                <Mongodb />
                <div>
                  <h2>NoSQL</h2>
                  <div></div>
                </div>
              </Skill>
              <Skill percentage={"85%"}>
                <Typescript />
                <div>
                  <h2>Typescript</h2>
                  <div></div>
                </div>
              </Skill>
              <Skill percentage={"80%"}>
                <Php />
                <div>
                  <h2>PHP</h2>
                  <div></div>
                </div>
              </Skill>
              <Skill percentage={"70%"}>
                <Laravel />
                <div>
                  <h2>Laravel</h2>
                  <div></div>
                </div>
              </Skill>
              <Skill percentage={"30%"}>
                <Python />
                <div>
                  <h2>Python</h2>
                  <div></div>
                </div>
              </Skill>
            </div>
            <div>
              <Skill percentage={"95%"}>
                <Adobexd />
                <div>
                  <h2>Adobe XD</h2>
                  <div></div>
                </div>
              </Skill>
              <Skill percentage={"80%"}>
                <Git />
                <div>
                  <h2>Git</h2>
                  <div></div>
                </div>
              </Skill>
              <Skill percentage={"75%"}>
                <Docker />
                <div>
                  <h2>Docker</h2>
                  <div></div>
                </div>
              </Skill>
              <Skill percentage={"50%"}>
                <Adobephotoshop />
                <div>
                  <h2>Adobe Photoshop</h2>
                  <div></div>
                </div>
              </Skill>
              <Skill percentage={"40%"}>
                <Adobepremierepro />
                <div>
                  <h2>Adobe Premiere</h2>
                  <div></div>
                </div>
              </Skill>
            </div>
          </SkillsContent>
        </Container>
      </SectionSkills>

      <SectionContact id="section4">
        <Container>
          <SectionTitle>CONTATO</SectionTitle>

          <ContactContent>
            <form>
              <Input
                type="text"
                placeholder="Nome completo"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <Input
                type="text"
                placeholder="Assunto"
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              />
              <Input
                type="text"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Textarea
                placeholder="Mensagem"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />

              <Button
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                enviar
              </Button>
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
                  <span className={`copiado ${show ? "show" : ""}`}>
                    Copiado!
                  </span>

                  <button
                    onClick={() => {
                      copyDiscord();
                    }}
                  >
                    <Image
                      src="/discord.svg"
                      alt="Discord"
                      width={30}
                      height={30}
                    />
                  </button>
                </li>
                <li>
                  <Link href="https://github.com/leozinh1">
                    <a target="_blank">
                      <Image
                        src="/github.svg"
                        alt="Github"
                        width={30}
                        height={30}
                      />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="mailto:leonardosj98@hotmail.com">
                    <a target="_blank">
                      <Image
                        src="/email.svg"
                        alt="Email"
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

      <Footer>
        <span>
          Desenvolvido por <b>Leonardo S. Jaremczuk</b>
        </span>
      </Footer>
    </>
  );
};

export default Home;
