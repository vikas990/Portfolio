import styled from "styled-components";

export const MainContainer = styled.div`
  height: 20vh;
  width: 80%;
  margin-left: 10%;
  margin-top: 7%;
  display: flex;
`;

export const IconSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Line = styled.div`
  border-left: 0.1rem solid ${(props) => props.theme.colors.text.secondary};
  height: 20%;
  margin-left: 0.5rem;
`;

export const MidSection = styled.div`
  width: 100%;
  text-align: center;
`;

export const SectionHeading = styled.div`
  color: ${(props) => props.theme.colors.text.primary};
`;

export const Name = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme.colors.text.primary};
  font-weight: 400;
`;

export const Profile = styled.p`
  font-size: 0.8rem;
  color: grey;
  margin-top: 1rem;
`;

export const Link = styled.a`
  color: ${(props) => props.theme.colors.text.secondary};
  writing-mode: vertical-rl;
  text-orientation: mixed;
  cursor: pointer;
  margin-top: 4rem;

  &:hover {
    color: ${(props) => props.theme.colors.text.primary};
  }
`;
