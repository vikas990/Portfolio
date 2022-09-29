import styled from "styled-components";

export const MainContainer = styled.footer`
  background: #00221c;
  padding: 3rem 0;
  text-align: center;
  font-size: 0.9rem;
  margin-top: 7rem;

  & a {
    color: white;
  }

  @media screen and (max-width: 20rem) {
    width: 21rem;
  }
`;

export const FooterLogo = styled.a`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 2rem;
  display: inline-block;

  &:hover{
    color: ${(props) => props.theme.colors.text.secondary};lor
  }

`;

export const PermaLinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin: 0 auto 3rem;

  & li a:hover{
    color: ${(props) => props.theme.colors.text.secondary};lor
  }

  @media screen and (max-width: 37.5rem) {
    flex-direction:column;
    gap: 1.5rem;
  }

`;

export const FooterSocial = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
  gap: 1rem;

  & a {
    background: #08313b;
    padding: 0.8rem;
    border-radius: 0.7rem;
    display: flex;
    border: 0.062rem solid transparent;

    &:hover {
      background: #00221c;
      border: 0.062rem solid white;
    }
  }

  @media screen and (max-width: 37.5rem) {
    margin-bottom: 2.6rem;
  }
`;

export const FooterCopyright = styled.div`
  margin-bottom: 4rem;
  color: white;
`;
