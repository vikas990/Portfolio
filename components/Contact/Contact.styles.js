import { Button } from "@mui/material";
import styled from "styled-components";

export const MainContainer = styled.section`
  width: 85%;
  margin: 0 auto;
  padding-top: 5rem;
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

export const ContactContainer = styled.div`
  width: 58%;
  display: grid;
  grid-template-columns: 30% 58%;
  gap: 12%;
  margin-left: 20%;
  margin-top: 5rem;
  & form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    & .textfield {
      background-color: transparent;
      border-radius: 0.5rem;
      width: 100%;
      padding: 1.2rem;
      border: 0.125rem solid #204867;
      color: white;

      & ::placeholder {
        color: grey;
      }
    }
  }

  @media screen and (max-width: 64rem) {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-left: 10%;
  }

  @media screen and (max-width: 37.5rem) {
    width: 90%;
    margin-left: 0;
  }
`;

export const ContactOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const ContactOption = styled.article`
  padding: 1.2rem;
  border-radius: 1.2rem;
  text-align: center;
  border-radius: 1rem;
  transition: all 400ms ease;
  color: ${(props) => props.theme.colors.text.secondary};
  font-size: 1.5rem;

  &:hover {
    border: 0.062rem solid aqua;
  }

  & h4 {
    color: white;
    margin-top: 0.5rem;
    font-size: 1rem;
  }

  & h5 {
    color: grey;
    font-size: 0.9rem;
  }

  & a {
    color: ${(props) => props.theme.colors.text.secondary};
    margin-top: 0.7rem;
    display: inline-block;
    font-size: 0.8rem;
  }
`;

export const StyledButton = styled(Button)`
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
