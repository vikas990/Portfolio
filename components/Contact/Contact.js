import {
  BigTitle,
  ContactContainer,
  ContactOption,
  ContactOptions,
  MainContainer,
  SmallTitle,
  StyledButton,
  TopSection,
} from "./Contact.styles";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Input, TextareaAutosize } from "@mui/material";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_KEY,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PRIVATE_KEY
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            Swal.fire(
              "Email Sent",
              "Thank you for Contacting! Will revert back ASAP 😄",
              "success"
            );
          }
        },
        (error) => {
          Swal.fire(
            "Something Happened",
            "Thank you for Contacting! Will revert back ASAP 😄",
            "error"
          );
        }
      );
    e.target.reset;
  };
  return (
    <MainContainer id="skill">
      <TopSection>
        <SmallTitle>Get In Touch</SmallTitle>
        <BigTitle>Contact Me</BigTitle>
      </TopSection>
      <ContactContainer>
        <ContactOptions>
          <ContactOption>
            <MailOutlineIcon />
            <h4>Email</h4>
            <h5>vikaskumarp66@gmail.com</h5>
            <a href="mailto:vikaskumarp66@gmail.com">Send a message</a>
          </ContactOption>

          <ContactOption>
            <WhatsAppIcon />
            <h4>WhatsApp</h4>
            <h5>+919910463859</h5>
            <a
              href="https://api.whatsapp.com/send?phone=9910463859"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </ContactOption>
        </ContactOptions>
        <form ref={form} onSubmit={sendEmail}>
          <Input
            className="textfield"
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <Input
            className="textfield"
            type="email"
            name="email"
            placeholder="Your E-mail"
            required
          />
          <TextareaAutosize
            className="textfield"
            aria-label="minimum height"
            minRows={3}
            placeholder="Your Message"
            name="message"
            required
          />
          <StyledButton type="submit">Send Message</StyledButton>
        </form>
      </ContactContainer>
    </MainContainer>
  );
};

export default Contact;
