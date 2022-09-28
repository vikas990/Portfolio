import React from "react";
import {
  BigTitle,
  ClientAvatar,
  ClientName,
  ClientReview,
  MainContainer,
  SmallTitle,
  Testimonials,
  TestimonialsContainer,
  TopSection,
} from "./Testimonials.styles";

const Testimonial = () => {
  const ReviewData = [
    {
      avatar: "/images/avatar1.jpeg",
      name: "Laura willams",
      review:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi",
    },
    {
      avatar: "/images/avatar2.jpeg",
      name: "Laura willams",
      review:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi",
    },
    {
      avatar: "/images/avatar3.jpeg",
      name: "Laura willams",
      review:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi",
    },
  ];

  return (
    <MainContainer id="testimonials">
      <TopSection>
        <SmallTitle>Review from work</SmallTitle>
        <BigTitle>Testimonials</BigTitle>
      </TopSection>
      <TestimonialsContainer>
        {ReviewData.map((review) => (
          <>
            <Testimonials>
              <ClientAvatar>
                <img src={review.avatar} alt="avatar1" />
                <ClientName>{review.name}</ClientName>
                <ClientReview>{review.review}</ClientReview>
              </ClientAvatar>
            </Testimonials>
          </>
        ))}
      </TestimonialsContainer>
    </MainContainer>
  );
};

export default Testimonial;
