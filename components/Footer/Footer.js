import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  FooterCopyright,
  FooterLogo,
  FooterSocial,
  MainContainer,
  PermaLinks,
} from "./Footer.styles";

const Footer = () => {
  return (
    <MainContainer>
      <FooterLogo href="#">Vikas Kumar</FooterLogo>
      <PermaLinks>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skill">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </PermaLinks>
      <FooterSocial>
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
      </FooterSocial>
      <FooterCopyright>
        <small>&copy; Made with ❤️ by Vikas Kumar. All rights reserved.</small>
      </FooterCopyright>
    </MainContainer>
  );
};

export default Footer;
