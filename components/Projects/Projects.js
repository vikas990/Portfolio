import React from "react";
import {
  BigTitle,
  MainContainer,
  PortfolioContainer,
  PortfolioCta,
  PortfolioItem,
  PortfolioItemImage,
  SmallTitle,
  StyledButton,
  StyledOutlinedButton,
  TopSection,
} from "./Projects.styles";

const Projects = () => {
  const ProjectItems = [
    {
      id: 1,
      img: "/images/project1.png",
      title: "Vaxine Time",
      github: "https://github.com/",
      demo: "https://www.google.com/",
    },
    {
      id: 2,
      img: "/images/project2.png",
      title: "Tes2022",
      github: "https://github.com/",
      demo: "https://www.google.com/",
    },
    {
      id: 3,
      img: "/images/project3.jpeg",
      title: "MyWays",
      github: "https://github.com/",
      demo: "https://www.google.com/",
    },
    {
      id: 4,
      img: "/images/project4.jpeg",
      title: "Hello world",
      github: "https://github.com/",
      demo: "https://www.google.com/",
    },
    {
      id: 5,
      img: "/images/project5.jpeg",
      title: "Plant your future",
      github: "https://github.com/",
      demo: "https://www.google.com/",
    },
    {
      id: 6,
      img: "/images/project6.jpeg",
      title: "Event Manager",
      github: "https://github.com/",
      demo: "https://www.google.com/",
    },
  ];

  return (
    <MainContainer id="projects">
      <TopSection>
        <SmallTitle>My Recent Work</SmallTitle>
        <BigTitle>Projects</BigTitle>
      </TopSection>
      <PortfolioContainer>
        {ProjectItems.map((project) => (
          <>
            <PortfolioItem>
              <PortfolioItemImage>
                <img src={project.img} alt="project1" />
              </PortfolioItemImage>
              <h3>{project.title}</h3>
              <StyledOutlinedButton href={project.github}>
                Github
              </StyledOutlinedButton>
              <StyledButton href={project.demo}>Live Demo</StyledButton>
            </PortfolioItem>
          </>
        ))}
      </PortfolioContainer>
    </MainContainer>
  );
};

export default Projects;
