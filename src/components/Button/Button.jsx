import React from "react";
import { Button } from "@mui/material";
import "./Button.css";

const CustomButton = ({ text, icon, onClick }) => {
  return (
    <Button
      className="custom-btn"
      endIcon={icon ? <div className="btn-icon-container">{icon}</div> : null}
      onClick={onClick}
    >
      <span className="btn-text">{text}</span>
    </Button>
  );
};

export default CustomButton;
