import React from "react";
import {
  BigTitle,
  LeftSection,
  LeftSectionHeading,
  MainContainer,
  MainSection,
  SmallTitle,
  TopSection,
} from "./Skill.styles";

const Skill = () => {
  return (
    <MainContainer id="skill">
      <TopSection>
        <SmallTitle>What Skill I Have</SmallTitle>
        <BigTitle>My Experience</BigTitle>
      </TopSection>
      <MainSection>
        <LeftSection>
          <LeftSectionHeading>Development & Technologies</LeftSectionHeading>
        </LeftSection>
      </MainSection>
    </MainContainer>
  );
};

export default Skill;
