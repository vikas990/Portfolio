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
              <small>2.5 years</small>
            </AboutCard>
            {/*<AboutCard>
              <GroupOutlinedIcon />
              <h5>Clients</h5>
              <small>300+ Worldwide</small>
  </AboutCard>*/}
            <AboutCard>
              <FolderZipOutlinedIcon />
              <h5>Projects</h5>
              <small>2 Completed</small>
            </AboutCard>
          </AboutCards>
          <p>
            I Vikas Kumar, working as a Team Leader at Bank of America, I have 2.5 years of experience in working with Reactjs, Nextjs, Nodejs, CSS, HTML, Javascript, SASS, Styled-components, Material-UI, Bootstrap, MongoDB, SQL
            Currently looking for some challenges and learnings.
          </p>
          <StyledButton href="#">Let&apos;s Talk</StyledButton>
        </AboutContent>
      </AboutContainer>
    </MainContainer>
  );
};

export default About;
