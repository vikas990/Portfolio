import styled from "styled-components";

export const MainContainer = styled.div`
  height: 20vh;
  width: 80%;
  margin-left: 10%;
  margin-top: 7%;
  display: flex;
  flex-direction: column;
`;

export const TopSection = styled.div`
  width: 100%;
  text-align: center;
`;

export const SmallTitle = styled.p`
  font-size: 0.8rem;
  color: grey;
  margin-top: 1rem;
`;

export const BigTitle = styled.p`
  color: ${(props) => props.theme.colors.text.secondary};
  font-size: 2rem;
  margin-top: 1rem;
`;

export const AboutMeContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 56.25rem) {
    display: block;
  }
`;
export const LeftSection = styled.div`
  width: 40%;

  & img {
    width: 31.25rem;
    height: 31.25rem;
  }
  @media screen and (max-width: 56.25rem) {
    width: 100%;

    & img {
      margin-left: 10%;
    }
  }

  @media screen and (max-width: 43.75rem) {
    width: 100%;

    & img {
      margin-left: 2%;
    }
  }

  @media screen and (max-width: 31.25rem) {
    & img {
      margin-left: -7rem;
    }
  }
`;
export const RightSection = styled.div`
  width: 50%;
  @media screen and (max-width: 56.25rem) {
    width: 100%;
  }
`;

export const ProjectSection = styled.div`
  display: flex;
  margin-top: 3rem;
  @media screen and (max-width: 31.25rem) {
    display: block;
  }
`;
export const Experience = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 20vh;
  text-align: center;
  padding-top: 1.6rem;
  transition: border 2s;

  & img {
    width: 20%;
    height: 20%;
    margin-left: 40%;
  }

  & h6 {
    color: grey;
    font-size: 1rem;
    margin-top: 1rem;
    font-weight: 500;
  }

  & p {
    color: ${(props) => props.theme.colors.text.primary};
    font-size: 0.7rem;
    margin-top: 1rem;
  }

  &:hover {
    border: 0.062rem solid aqua;
    border-radius: 1rem;
  }
  @media screen and (max-width: 31.25rem) {
    width: 100%;

    & img {
      width: 20%;
      height: 30%;
      margin-left: 40%;
    }
  }
`;
export const Client = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 20vh;
  text-align: center;
  padding-top: 1.6rem;
  transition: border 2s;

  & img {
    width: 20%;
    height: 20%;
    margin-left: 40%;
  }

  & h6 {
    color: grey;
    font-size: 1rem;
    margin-top: 1rem;
    font-weight: 500;
  }

  & p {
    color: ${(props) => props.theme.colors.text.primary};
    font-size: 0.7rem;
    margin-top: 1rem;
  }

  &:hover {
    border: 0.062rem solid aqua;
    border-radius: 1rem;
  }
  @media screen and (max-width: 31.25rem) {
    width: 100%;

    & img {
      width: 20%;
      height: 30%;
      margin-left: 40%;
    }
  }
`;
export const Projects = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 20vh;
  text-align: center;
  padding-top: 1.6rem;
  transition: border 2s;

  & img {
    width: 20%;
    height: 20%;
    margin-left: 40%;
  }

  & h6 {
    color: grey;
    font-size: 1rem;
    margin-top: 1rem;
    font-weight: 500;
  }

  & p {
    color: ${(props) => props.theme.colors.text.primary};
    font-size: 0.7rem;
    margin-top: 1rem;
  }

  &:hover {
    border: 0.062rem solid aqua;
    border-radius: 1rem;
  }
  @media screen and (max-width: 31.25rem) {
    width: 100%;

    & img {
      width: 20%;
      height: 30%;
      margin-left: 40%;
    }
  }
`;

export const Intro = styled.p`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 1rem;
  line-height: 1.6;
  margin-top: 2rem;
`;

export const Button = styled.button`
  color: white;
  background-color: ${(props) => props.theme.colors.text.secondary};
  font-size: 1rem;
  padding: 1rem;
  border-radius: 0.4rem;
  border: none;
  margin-top: 4rem;
  cursor: pointer;

  &:hover {
    color: #5bd85a;
    background-color: #22303d;
  }
`;
