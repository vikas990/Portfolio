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

export const TestimonialsContainer = styled.div`
  width: 40%;
  margin-left: 30%;

  @media screen and (max-width: 64rem) {
    width: 60%;
    margin-left: 20%;
  }

  @media screen and (max-width: 37.5rem) {
    width: 90%;
    margin-left: 10%;
  }
`;

export const Testimonials = styled.article`
  text-align: center;
  padding: 2rem;
  border-radius: 2rem;
  user-select: none;
`;

export const ClientAvatar = styled.div`
  & img {
    width: 4rem;
    aspect-ratio: 1/1;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 auto 1rem;
    border: 0.4rem solid ${(props) => props.theme.colors.text.secondary};
  }
`;

export const ClientName = styled.h5`
  color: ${(props) => props.theme.colors.text.navColor};
  font-weight: 700;
  display: block;
  width: 80%;
  margin: 0.8rem auto 0.8rem;
  font-size: 1rem;
`;

export const ClientReview = styled.small`
  color: ${(props) => props.theme.colors.text.navColor};

  @media screen and (max-width: 37.5rem) {
    width: 90%;
  }
`;
