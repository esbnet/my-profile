import { Github, Twitter, Facebook, YouTube, Linkedin, Website } from "../components/AllSvgs";

import styled from "styled-components";
import { motion } from "framer-motion";

import { NavLink } from "react-router-dom";
import { DarkTheme, mediaQueries } from "../components/Themes";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;

    ${mediaQueries(20)`
      margin: 0.3rem 0;
  `};
  }

  ${mediaQueries(40)`
  left: 1rem;
      svg{
        width:20px;
        height:20px
      }
  `};
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
`;

const SocialIcons = (props) => {
  const mq = window.matchMedia("(max-width: 40em)").matches;

  return (
    <Icons>
      {/* github */}
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <NavLink
          title="Meu repositório principal - Github"
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://github.com/esbnet" }}
        >
          <Github 
            width={25}
            height={25}
            fill={
              props.theme === "dark" ? `${DarkTheme.text}` : `${DarkTheme.body}`
            }
          />
        </NavLink>
      </motion.div>

      {/* linkedin */}
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
      >
        <NavLink
          title="Minha carreira - Linkedin"
          style={{ color: "inherit" }}
          target="_blank"
          to={{
            pathname:
              "https://www.linkedin.com/in/edmilson-soares/",
          }}
        >
          <Linkedin
            width={25}
            height={25}
            fill={
              props.theme === "dark" ? `${DarkTheme.text}` : `${DarkTheme.body}`
            }
          />
        </NavLink>
      </motion.div>
      
      {/* <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "#" }}
        >
          <Twitter
            width={25}
            height={25}
            fill={
              props.theme === "dark" ? `${DarkTheme.text}` : `${DarkTheme.body}`
            }
          />
        </NavLink>
      </motion.div> */}

      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "http://quarkscode.com.br" }}
        >
          <Website
            width={25}
            height={25}
            fill={
              props.theme === "dark" ? `${DarkTheme.text}` : `${DarkTheme.body}`
            }
          />
        </NavLink>
      </motion.div>

      {/* youtube */}
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
      >
        <NavLink
          title="Meu canal sobre tecnologia - Youtube"
          style={{ color: "inherit" }}
          target="_blank"
          to={{
            pathname:
              "https://www.youtube.com/c/EdmilsonSoares",
          }}
        >
          <YouTube
            width={25}
            height={25}
            fill={
              props.theme === "dark" ? `${DarkTheme.text}` : `${DarkTheme.body}`
            }
          />
        </NavLink>
      </motion.div>

      {/* facebook */}
      {/* <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <NavLink
          title="Facebook"
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://www.facebook.com/edmilson" }}
        >
          <Facebook
            width={25}
            height={25}
            fill={
              props.theme === "dark" ? `${DarkTheme.text}` : `${DarkTheme.body}`
            }
          />
        </NavLink>
      </motion.div> */}

      <Line
        initial={{ height: 0 }}
        animate={{ height: mq ? "3rem" : "6rem" }}
        color={props.theme}
        transition={{ type: "spring", duration: 1, delay: 0.8 }}
      />

    </Icons>
  );
};

export default SocialIcons;
