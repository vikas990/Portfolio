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

export const SkillContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media screen and (max-width: 64rem) {
    grid-template-columns: 1fr;
  }
`;

export const Frontend = styled.div`
  padding: 2.4rem 5rem;
  border-radius: 2rem;
  transition: all 400ms ease;

  &:hover {
    border: 0.062rem solid aqua;
  }

  & h3 {
    color: ${(props) => props.theme.colors.text.secondary};
    text-align: center;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 64rem) {
    width: 80%;
    padding: 2rem;
    margin-left: 20%;
  }

  @media screen and (max-width: 25rem) {
    margin-left: 5%;
  }
`;

export const FrontendContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;
`;

export const Backend = styled.div`
  color: ${(props) => props.theme.colors.text.secondary};
  padding: 2.4rem 5rem;
  border-radius: 2rem;
  transition: all 400ms ease;

  &:hover {
    border: 0.062rem solid aqua;
  }

  & h3 {
    color: ${(props) => props.theme.colors.text.secondary};
    text-align: center;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 64rem) {
    width: 80%;
    padding: 2rem;
    margin-left: 20%;
  }

  @media screen and (max-width: 25rem) {
    margin-left: 5%;
  }
`;

export const BackendContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;
`;

export const SkillDetails = styled.article`
  color: ${(props) => props.theme.colors.text.secondary};
  display: flex;
  gap: 1rem;
  & h4 {
    color: ${(props) => props.theme.colors.text.primary};
  }
  & small {
    color: grey;
  }
`;
