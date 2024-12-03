import React from "react";
import "./Contact.css";
import { Grid, TextField, Typography } from "@mui/material";
import resumeData from "../../utils/resumeData";
import CustomButton from "../../components/Button/Button";

const Contact = () => {
  return (
    <Grid container spacing={6} className="section top-30 pb-45">
      {/* Contact Form */}
      <Grid item xs={12} lg={7}>
        <Grid container>
          <Grid item className="section-title mb-30">
            <span></span>
            <h6 className="section-title-text">Contact Me</h6>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="standard"
                  fullWidth
                  name="name"
                  label="Name"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  variant="standard"
                  fullWidth
                  name="email"
                  label="E-Mail"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  fullWidth
                  name="message"
                  label="Message"
                  multiline
                  rows={4}
                />
              </Grid>

              <Grid item xs={12}>
                <CustomButton text="Submit" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Contact Information */}
      <Grid item xs={12} lg={5}>
        <Grid container>
          <Grid item className="section-title mb-30">
            <span></span>
            <h6 className="section-title-text">Contact Information</h6>
          </Grid>

          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12}>
                <Typography className="contactinfo-item">
                  <span>Address: </span> {resumeData.address}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography className="contactinfo-item">
                  <span>Phone: </span> {resumeData.phone}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography className="contactinfo-item">
                  <span>E-Mail: </span> {resumeData.email}
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container className="contactinfo-socials-container">
              {Object.keys(resumeData.socials).map((key, i) => (
                <Grid item className="contactinfo-social" key={i}>
                  <a href={resumeData.socials[key].link}>
                    {resumeData.socials[key].icon}
                  </a>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
