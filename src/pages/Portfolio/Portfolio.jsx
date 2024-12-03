import React, { Fragment, useState } from "react";
import "./Portfolio.css";
import {
  Grid,
  Tabs,
  Tab,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  IconButton,
  Divider,
} from "@mui/material";
import resumeData from "../../utils/resumeData";
import { Close } from "@mui/icons-material";

const Portfolio = () => {
  const [tabValue, setTabValue] = useState("All");
  const [projectDialog, setProjectDialog] = useState({});

  return (
    <Grid container spacing={1} className="section pb-45 pt-45">
      {/* Title */}
      <Grid item className="section-title mb-20">
        <span></span>
        <h6 className="section-title-text">Portfolio</h6>
      </Grid>

      {/* Tabs */}
      <Grid item xs={12}>
        <Tabs
          value={tabValue}
          indicatorColor="white"
          className="custom-tabs"
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          <Tab
            label="All"
            value="All"
            className={
              tabValue == "All" ? "customtabs-item active" : "customtabs-item"
            }
          />
          {[...new Set(resumeData.projects.map((item) => item.tag))].map(
            (tag, i) => (
              <Tab
                key={i}
                label={tag}
                value={tag}
                className={
                  tabValue == tag ? "customtabs-item active" : "customtabs-item"
                }
              />
            )
          )}
        </Tabs>
      </Grid>

      {/* Projects */}
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {resumeData.projects.map((project, i) => (
            <Fragment key={`${project.title}-${i}`}>
              {tabValue == project.tag || tabValue == "All" ? (
                <Grid item xs={12} sm={6} md={4}>
                  <Grow in timeout={1000}>
                    <Card
                      className="custom-card"
                      elevation={24}
                      onClick={() => setProjectDialog(project)}
                    >
                      <CardActionArea>
                        <CardMedia
                          className="custom-card-image"
                          image={project.image}
                          title={project.title}
                        />
                        <Divider sx={{ bgcolor: "grey" }} />
                        <CardContent>
                          <Typography
                            variant="body2"
                            className="custom-card-title"
                          >
                            {project.title}
                          </Typography>
                          <Typography
                            className="custom-card-caption"
                            variant="caption"
                          >
                            {project.caption}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </Fragment>
          ))}
        </Grid>
      </Grid>

      <Dialog
        open={Object.keys(projectDialog).length ? true : false}
        onClose={() => setProjectDialog({})}
        className="project-dialog"
        // maxWidth="lg"
        fullWidth
      >
        <DialogTitle className="project-dialog-title">
          {projectDialog.title}
          <IconButton onClick={() => setProjectDialog({})}>
            <Close />
          </IconButton>
        </DialogTitle>

        <Divider sx={{ bgcolor: "grey" }} />

        <Box className="project-dialog-image-container">
          <img
            src={projectDialog.image}
            alt=""
            className="project-dialog-image"
          />
        </Box>

        <Divider sx={{ bgcolor: "grey" }} />

        <DialogContent>
          <Typography
            className="project-dialog-description"
            sx={{ whiteSpace: "pre-line" }}
          >
            {projectDialog.description}
          </Typography>
        </DialogContent>

        <Divider sx={{ bgcolor: "grey" }} />

        <DialogActions className="project-dialog-actions">
          {projectDialog?.links?.map((link) => (
            <a href={link.link} target="_blank" className="project-dialog-icon">
              {link.icon}
            </a>
          ))}
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default Portfolio;
