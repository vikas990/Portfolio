import React, { useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import Diversity1OutlinedIcon from "@mui/icons-material/Diversity1Outlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import { Navbar } from "./Nav.styles";

const Nav = () => {
  const [active, setActive] = useState("#");

  const ChangeActiveState = (state) => {
    setActive(state);
  };

  return (
    <Navbar>
      <a
        href="#"
        onClick={() => ChangeActiveState("#")}
        className={active === "#" ? "active" : ""}
      >
        <HomeOutlinedIcon />
      </a>
      <a
        href="#about"
        onClick={() => ChangeActiveState("#about")}
        className={active === "#about" ? "active" : ""}
      >
        <PersonOutlineOutlinedIcon />
      </a>
      <a
        href="#skill"
        onClick={() => ChangeActiveState("#skill")}
        className={active === "#skill" ? "active" : ""}
      >
        <BookOutlinedIcon />
      </a>
      <a
        href="#projects"
        onClick={() => ChangeActiveState("#services")}
        className={active === "#services" ? "active" : ""}
      >
        <Diversity1OutlinedIcon />
      </a>
      <a
        href="#contact"
        onClick={() => ChangeActiveState("#contact")}
        className={active === "#contact" ? "active" : ""}
      >
        <MailOutlineOutlinedIcon />
      </a>
    </Navbar>
  );
};

export default Nav;
