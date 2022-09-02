import styled from "styled-components";

export const MainContainer = styled.div`
  height: 20vh;
  width: 80%;
  margin-left: 10%;
  margin-top: 30%;
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

export const MainSection = styled.div`
  width: 100%;
`;

export const LeftSection = styled.div`
  width: 50%;
  height: 50vh;
  margin-top: 4rem;
  transition: border 2s;
  text-align: center;

  &:hover {
    border: 0.062rem solid aqua;
    border-radius: 4rem;
  }
`;

export const LeftSectionHeading = styled.p`
  color: ${(props) => props.theme.colors.text.secondary};
  font-size: 1.5rem;
  margin-top: 3rem;
`;
