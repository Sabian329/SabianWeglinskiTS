import React from "react";
import { Heading, Text } from "@chakra-ui/layout";
import { Section, SectionThree, SectionTwo } from "./Styled";
import coding from "../../Assets/think.svg";
import me from "../../Assets/me.jpg";
import react from "../../Assets/react.svg";
import { motion } from "framer-motion";
import { Button } from "@chakra-ui/button";
export const AboutWrapper = () => {
  return (
    <>
      <motion.div
        animate={{ opacity: [0.5, 1], y: [-500, 0] }}
        transition={{ duration: 1.2 }}
      >
        <Section>
          <article>
            <header>
              <Heading>about.</Heading>
              <h1>I'm a front-end developer based in Legnica, Poland.</h1>
            </header>
            <Text>
              My name is Sabian. I'm most passionate about new technologies and
              using them in my projects 🚀.I'am focused on writing clean,
              efficient code. Creating modern, user friendly and responsive
              layouts, especially based on
              <strong> React.js ⚙️ </strong> library.
            </Text>
          </article>
          <img src={react} alt="coding svg" />
        </Section>
      </motion.div>
      <SectionTwo>
        <article>
          <header>
            <Heading>my story.</Heading>
          </header>
          <Text>
            I've always been fascinated by technology. Over a year ago I started
            learning Front-End Development. Beginning with static projects in
            bare HTML, CSS and JavaScript my code evolved into responsive and
            accessible web apps made in TypeScript and React, with many
            libraries such as Redux or Chakra-UI. I'm a fast learner and I
            always try to improve my skills to be ready for every scenario. I do
            care for clean and efficient code in the projects I'm involved in,
            always trying to implement as much good practices as possible. I
            speak both English and Polish, feel free to get in touch with me!
          </Text>
        </article>
        <img src={me} alt="coding svg" />
      </SectionTwo>
      <SectionThree>
        <article>
          <header>
            <Heading>this.page</Heading>
            <h1>This page was made with create-react-app.</h1>
          </header>
          <Text>
            I used <strong> TypeScript</strong>, styled-components, React Router
            and Chakra UI. This page also support mobile devices.
          </Text>
          <a
            href="https://github.com/Sabian329/SabianWeglinskiTS"
            target="_blank"
            rel="noreferrer"
          >
            <Button>My code</Button>
          </a>
        </article>
        <img src={coding} alt="coding svg" />
      </SectionThree>
    </>
  );
};
