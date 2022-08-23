import Image from "next/image";

import React from "react";
import {
  IconSection,
  Line,
  Link,
  MainContainer,
  MidSection,
  Name,
  Profile,
  SectionHeading,
} from "./Header.styles";

const Header = () => {
  return (
    <MainContainer>
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
      <Link href="#">Scroll Down</Link>
    </MainContainer>
  );
};

export default Header;
