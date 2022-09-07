import {
  AboutMeContainer,
  BigTitle,
  Button,
  Client,
  Experience,
  Intro,
  LeftSection,
  MainContainer,
  Projects,
  ProjectSection,
  RightSection,
  SmallTitle,
  TopSection,
} from "./About.styles";

const About = () => {
  return (
    <MainContainer id="about">
      <TopSection>
        <SmallTitle>Get to Know</SmallTitle>
        <BigTitle>About me</BigTitle>
      </TopSection>
      <AboutMeContainer>
        <LeftSection>
          <img src="/images/me.png" alt="My Image" />
        </LeftSection>
        <RightSection>
          <ProjectSection>
            <Experience>
              <img
                src="/images/experience.png"
                alt="My Image"
                height={50}
                width={20}
              />
              <h6>Experience</h6>
              <p>5+ months</p>
            </Experience>
            <Client>
              <img
                src="/images/client.png"
                alt="My Image"
                height={20}
                width={20}
              />
              <h6>Client</h6>
              <p>10+ Worldwide</p>
            </Client>
            <Projects>
              <img
                src="/images/project.png"
                alt="My Image"
                height={20}
                width={20}
              />
              <h6>Projects</h6>
              <p>10+ Completed</p>
            </Projects>
          </ProjectSection>
          <Intro>
            Myself Vikas Kumar, Post Graduate from Vellore Institute of
            Technology with a CGPA of 8.92. Currently Working as Team Leader at
            Bank of America.Also Have a passion about Web Development{" "}
          </Intro>
          <Button>Let&apos;s Talk</Button>
        </RightSection>
      </AboutMeContainer>
    </MainContainer>
  );
};

export default About;
