import Image from "next/image";
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
      title: "Portfolio",
      github: "https://github.com/vikas990/Portfolio.git",
      demo: "https://6335eb7f12851626a65c6f91--cheerful-halva-ef7afa.netlify.app/",
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
                <Image
                  src={project.img}
                  alt="project1"
                  width={500}
                  height={300}
                />
              </PortfolioItemImage>
              <h3>{project.title}</h3>
              <div>
                <StyledOutlinedButton href={project.github}>
                  Github
                </StyledOutlinedButton>
                <StyledButton href={project.demo}>Live Demo</StyledButton>
              </div>
            </PortfolioItem>
          </>
        ))}
      </PortfolioContainer>
    </MainContainer>
  );
};

export default Projects;
