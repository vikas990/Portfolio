import Image from "next/image";

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
        <Image
          src="/images/linkedin.png"
          alt="Instagram icon"
          height={20}
          width={20}
        />
        <Image
          src="/images/github.png"
          alt="Instagram icon"
          height={20}
          width={20}
        />
        <Image
          src="/images/instagram.png"
          alt="Instagram icon"
          height={20}
          width={20}
        />
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
              style={{ color: "#DB2048", marginRight: "-1rem" }}
            />
          ) : (
            <LightModeIcon
              onClick={themeToggler}
              style={{ color: "#DB2048", marginRight: "-1rem" }}
            />
          )}
        </div>
        <Link href="#">Scroll Down</Link>
      </LeftContainer>
    </MainContainer>
  );
};

export default Header;
