import React from "react";
import {
  Backend,
  BackendContent,
  BigTitle,
  Frontend,
  FrontendContent,
  MainContainer,
  SkillContainer,
  SkillDetails,
  SmallTitle,
  TopSection,
} from "./Skill.styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Skill = () => {
  return (
    <MainContainer id="skill">
      <TopSection>
        <SmallTitle>What Skills I Have</SmallTitle>
        <BigTitle>My Skills</BigTitle>
      </TopSection>

      <SkillContainer>
        <Frontend>
          <h3>Frontend Development</h3>
          <FrontendContent>
            <SkillDetails>
              <CheckCircleIcon />
              <div>
                <h4>HTML</h4>
                <small>Experienced</small>
              </div>
            </SkillDetails>
            <SkillDetails>
              <CheckCircleIcon />
              <div>
                <h4>CSS</h4>
                <small>Intermediate</small>
              </div>
            </SkillDetails>
            <SkillDetails>
              <CheckCircleIcon />
              <div>
                <h4>Javascript</h4>
                <small>Experienced</small>
              </div>
            </SkillDetails>
            <SkillDetails>
              <CheckCircleIcon />
              <div>
                <h4>Bootstrap</h4>
                <small>Experienced</small>
              </div>
            </SkillDetails>
            <SkillDetails>
              <CheckCircleIcon />
              <div>
                <h4>Tailwind</h4>
                <small>Experienced</small>
              </div>
            </SkillDetails>
            <SkillDetails>
              <CheckCircleIcon />
              <div>
                {" "}
                <h4>React</h4>
                <small>Experienced</small>
              </div>
            </SkillDetails>
          </FrontendContent>
        </Frontend>

        {/** End of Frontend */}

        <Backend>
          <h3>Backend Development</h3>
          <BackendContent>
            <SkillDetails>
              <CheckCircleIcon />
              <div>
                <h4>Nodejs</h4>
                <small>Experienced</small>
              </div>
            </SkillDetails>
            <SkillDetails>
              <CheckCircleIcon />
              <div>
                <h4>MongoDB</h4>
                <small>Intermediate</small>
              </div>
            </SkillDetails>
            <SkillDetails>
              <CheckCircleIcon />
              <div>
                <h4>MySQL</h4>
                <small>Experienced</small>
              </div>
            </SkillDetails>
            <SkillDetails>
              <CheckCircleIcon />
              <div>
                <h4>Python</h4>
                <small>Experienced</small>
              </div>
            </SkillDetails>
          </BackendContent>
        </Backend>
      </SkillContainer>
    </MainContainer>
  );
};

export default Skill;
