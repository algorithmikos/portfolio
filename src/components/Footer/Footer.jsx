import React from "react";
import "./Footer.css";
import { Typography } from "@mui/material";
import resumeData from "../../utils/resumeData";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <Typography className="footer-name">{resumeData.name}</Typography>
      </div>
      <div className="footer-right">
        <Typography className="footer-copyright">
          Designed and Developed by{" "}
          <a href="" target="_blank">
            Umar Fayiz
          </a>
          <br />
          Idea cloned from{" "}
          <a
            href="https://themeforest.net/user/tavonline/portfolio"
            target="_blank"
          >
            Tavonline
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
