import styled from "styled-components";

export const MainContainer = styled.div`
  height: 50vh;
  width: 85%;
  margin: 0% auto;
  padding: 7rem;
  display: flex;
  @media screen and (max-width: 37.5rem) {
    display: block;
  }
`;

export const IconSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (max-width: 37.5rem) {
    display: none;
  }
`;

export const Line = styled.div`
  border-left: 0.1rem solid ${(props) => props.theme.colors.text.secondary};
  height: 20%;
  margin-left: 0.5rem;

  @media screen and (max-width: 37.5rem) {
    display: none;
  }
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
  margin-top: 8rem;

  &:hover {
    color: ${(props) => props.theme.colors.text.primary};
  }
  @media screen and (max-width: 37.5rem) {
    display: none;
  }
`;

export const LeftContainer = styled.div`
  @media screen and (max-width: 37.5rem) {
    & div {
      display: block;
      left: 90%;
      z-index: 2;
      position: fixed;
      top: 10%;
    }
  }
`;
