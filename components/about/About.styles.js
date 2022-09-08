import styled from "styled-components";

export const MainContainer = styled.section`
  width: 85%;
  margin: 0 auto;
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

export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 35% 50%;
  gap: 5%;

  @media screen and (max-width: 64rem) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;
export const AboutMe = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  display: grid;
  place-item: center;

  @media screen and (max-width: 64rem) {
    width: 50%;
    margin: 2rem auto 4rem;
  }

  @media screen and (max-width: 37.5rem) {
    width: 65%;
    margin: 0 auto 3rem;
  }
`;
export const AboutMeImage = styled.div`
  & img {
    width: 100%;
    aspect-ratio: 1/1;
  }
`;

export const AboutContent = styled.div`
  & p {
    color: ${(props) => props.theme.colors.text.primary};
    margin: 2rem 0 2.6rem;
    line-height: 1.5rem;
  }

  @media screen and (max-width: 64rem) {
    margin: 1rem 0 1.5rem;
  }

  @media screen and (max-width: 37.5rem) {
    margin: 1.5rem 0;
  }
`;

export const AboutCards = styled.div`
  color: ${(props) => props.theme.colors.text.secondary};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media screen and (max-width: 37.5rem) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;
export const AboutCard = styled.article`
  text-align: center;
  padding: 2rem;
  border-radius: 1rem;
  transition: all 400ms ease;
  line-height: 2rem;
  & h5 {
    color: ${(props) => props.theme.colors.text.ternary};
    font-size: 0.95rem;
  }
  & small {
    color: grey;
    font-size: 0.7rem;
  }

  &:hover {
    border: 0.062rem solid aqua;
  }
`;

export const StyledButton = styled.a`
  width: max-content;
  display: inline - block;
  color: ${(props) => props.theme.colors.text.primary};
  padding: 0.75rem 1.2rem;
  border-radius: 0.4rem;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 400ms ease;
  background: ${(props) => props.theme.colors.text.secondary};

  &:hover {
    background: #08313b;
    color: #5bd85a;
    border-color: transparent;
  }
`;
