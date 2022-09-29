import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import React, { useEffect } from "react";
import {
  IconSection,
  LeftContainer,
  Line,
  Link,
  MainContainer,
  MidSection,
  Name,
  Profile,
  SectionHeading,
} from "./Header.styles";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";

const Header = ({ setTheme, theme }) => {
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <MainContainer id="Home">
      <IconSection>
        <a href="https://github.com/vikas990" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
        <a
          href="https://www.instagram.com/vikas_kumar_31/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/vikas-kumar-3469b4164/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
        <Line />
      </IconSection>
      <MidSection>
        <SectionHeading>👋 Hey there, I&apos;m</SectionHeading>
        <Name>Vikas Kumar</Name>
        <Profile>MERN Stack Developer</Profile>
      </MidSection>
      <LeftContainer>
        <div>
          {theme === "light" ? (
            <ModeNightIcon
              onClick={themeToggler}
              style={{
                color: "#DB2048",
                marginRight: "-1rem",
                cursor: "pointer",
              }}
            />
          ) : (
            <LightModeIcon
              onClick={themeToggler}
              style={{
                color: "#DB2048",
                marginRight: "-1rem",
                cursor: "pointer",
              }}
            />
          )}
        </div>
        <Link href="#contact">Scroll Down</Link>
      </LeftContainer>
    </MainContainer>
  );
};

export default Header;
