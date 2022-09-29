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

export const PortfolioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  @media screen and (max-width: 64rem) {
    grid-template-columns: 1fr 1fr;
    gap: 1.2rem;
  }

  @media screen and (max-width: 37.5rem) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const PortfolioItem = styled.article`
  padding: 1.2rem;
  border-radius: 2rem;
  border: 0.062rem solid aqua;
  transition: all 400ms ease;
  padding: 2rem;

  & div a:last-child {
    margin-left: 3rem;
  }

  @media screen and (max-width: 25rem) {
    & div a:last-child {
      margin-left: 0;
    }
  }

  &:hover {
    border: 0.062rem solid ${(props) => props.theme.colors.text.secondary};
  }

  & h3 {
    margin: 1.2rem 0 2rem;
  }
`;

export const PortfolioItemImage = styled.div`
  border-radius: 1.5rem;
  overflow: hidden;
`;

export const PortfolioCta = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
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

  @media screen and (max-width: 25rem) {
    padding: 0.3rem 0.5rem;
  }
`;

export const StyledOutlinedButton = styled.a`
  width: max-content;
  display: inline - block;
  color: ${(props) => props.theme.colors.text.secondary};
  padding: 0.75rem 1.2rem;
  border-radius: 0.4rem;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.colors.text.secondary};
  transition: all 400ms ease;
  background: transparent;

  &:hover {
    background: #08313b;
    color: #5bd85a;
    border-color: transparent;
  }

  @media screen and (max-width: 25rem) {
    padding: 0.3rem 0.5rem;
  }
`;
