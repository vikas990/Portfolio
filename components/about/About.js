import {
  AboutCard,
  AboutCards,
  AboutContainer,
  AboutContent,
  AboutMe,
  AboutMeImage,
  BigTitle,
  MainContainer,
  SmallTitle,
  StyledButton,
  TopSection,
} from "./About.styles";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import FolderZipOutlinedIcon from "@mui/icons-material/FolderZipOutlined";
import { Button } from "@mui/material";

const About = () => {
  return (
    <MainContainer id="about">
      <TopSection>
        <SmallTitle>Get to Know</SmallTitle>
        <BigTitle>About me</BigTitle>
      </TopSection>
      <AboutContainer>
        <AboutMe>
          <AboutMeImage>
            <img src="/images/me.png" alt="My Image" />
          </AboutMeImage>
        </AboutMe>
        <AboutContent>
          <AboutCards>
            <AboutCard>
              <WorkOutlineOutlinedIcon />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </AboutCard>
            <AboutCard>
              <GroupOutlinedIcon />
              <h5>Clients</h5>
              <small>300+ Worldwide</small>
            </AboutCard>
            <AboutCard>
              <FolderZipOutlinedIcon />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </AboutCard>
          </AboutCards>
          <p>
            Myself Vikas Kumar, Post Graduate from Vellore Institute of
            Technology with a CGPA of 8.92. Currently Working as Team Leader at
            Bank of America.Also Have a passion about Web Development😄
          </p>
          <StyledButton href="#">Let&apos;s Talk</StyledButton>
        </AboutContent>
      </AboutContainer>
    </MainContainer>
  );
};

export default About;
