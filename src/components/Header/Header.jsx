import React from "react";
import {
  Container,
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HomeRounded, Telegram } from "@mui/icons-material";
import resumeData from "../../utils/resumeData";
import CustomButton from "../Button/Button";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <Navbar expand="lg" sticky="top" className="header">
      {/* Home Page */}
      <Nav.Link as={NavLink} to="/" className="p-0 m-0">
        <Navbar.Brand className="header-home">
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav className="header-left">
          {/* Resume Link */}
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathName == "/" ? "header-link-active" : "header-link"}
          >
            RESUME
          </Nav.Link>

          {/* Portfolio Link */}
          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={
              pathName == "/portfolio" ? "header-link-active" : "header-link"
            }
          >
            PORTFOLIO
          </Nav.Link>

          {/* Contact Link */}
          <Nav.Link
            as={NavLink}
            to="/contact"
            className={
              pathName == "/contact" ? "header-link-active" : "header-link"
            }
          >
            CONTACT
          </Nav.Link>
        </Nav>

        <div className="header-right">
          {Object.keys(resumeData.socials).map((key) => (
            <a key={key} href={resumeData.socials[key].link} target="_blank">
              {resumeData.socials[key].icon}
            </a>
          ))}
          <CustomButton text="Hire Me" icon={<Telegram />} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
