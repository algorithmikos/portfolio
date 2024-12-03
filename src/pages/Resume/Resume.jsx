import React from "react";
import "./Resume.css";
import { Box, Grid, Paper, TextField, Typography } from "@mui/material";
import resumeData from "../../utils/resumeData";
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../../components/Timeline/Timeline";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import { TimelineItem, TimelineContent, TimelineDot } from "@mui/lab";
import CustomButton from "../../components/Button/Button";

const Resume = () => {
  return (
    <>
      {/* About me */}
      <Grid container className="section pt-45 pb-45">
        <Grid item className="section-title mb-30">
          <span></span>
          <h6 className="section-title-text">About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className="aboutme-text">
            {resumeData.about}
          </Typography>
        </Grid>
      </Grid>

      {/* Education and Exp */}
      <Grid container className="section pb-45">
        <Grid item className="section-title mb-30">
          <span></span>
          <h6 className="section-title-text">Resume</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container className="resume-timeline">
            {/* Exp */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Work Experiences" icon={<WorkIcon />}>
                {resumeData.experiences
                  .slice()
                  .reverse()
                  .map((experience, i) => (
                    <TimelineItem key={i}>
                      <CustomTimelineSeparator />
                      <TimelineContent className="timeline-content">
                        <Typography className="timeline-title">
                          {experience.title}
                        </Typography>

                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                          {experience.place}
                        </Typography>
                        <Typography variant="caption" className="timeline-date">
                          {experience.date}
                        </Typography>
                        <Typography
                          variant="body2"
                          className="timeline-description"
                        >
                          {experience.description}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
              </CustomTimeline>
            </Grid>
            {/* Education */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Education" icon={<SchoolIcon />}>
                {resumeData.education.map((education, i) => (
                  <TimelineItem key={i}>
                    <CustomTimelineSeparator />
                    <TimelineContent className="timeline-content">
                      <Typography className="timeline-title">
                        {education.title}
                      </Typography>
                      <Typography variant="caption" className="timeline-date">
                        {education.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline-description"
                        sx={{
                          whiteSpace: "pre-line",
                        }}
                      >
                        {education.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Services */}
      {/* <Grid container className="section pb-45">
        <Grid item className="section-title mb-30">
          <span></span>
          <h6 className="section-title-text">My Services</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={3} justifyContent="space-around">
            {resumeData.services.map((service, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <div className="service">
                  <span className="service-icon">{service.icon}</span>
                  <Typography variant="h6" className="service-title">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" className="service-description">
                    {service.description}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid> */}

      {/* Skills */}

      <Grid container className="section pb-45 p-50 graybg">
        <Grid item className="section-title mb-30">
          <span></span>
          <h6 className="section-title-text">My Skills</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="space-between" spacing={2}>
            {resumeData.skills.map((skill, i) => (
              <Grid item xs={12} md={6} key={i}>
                <Paper elevation={0} className="skill">
                  <Typography variant="h6" className="skill-title">
                    {skill.icon} {skill.title}
                  </Typography>

                  <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                    {skill.description.map((element, i) => (
                      <Typography
                        variant="body2"
                        className="skill-description"
                        key={i}
                        sx={{ px: 1 }}
                      >
                        <TimelineDot
                          variant="outlined"
                          className="timeline-dot"
                        />
                        {element}
                      </Typography>
                    ))}
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;
