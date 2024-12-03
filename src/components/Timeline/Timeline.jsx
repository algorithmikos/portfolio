import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import WorkIcon from "@mui/icons-material/Work";

import "./Timeline.css";
import { Typography } from "@mui/material";

const CutsomTimeline = ({ title, icon, children }) => {
  return (
    <Timeline className="timeline">
      {/* Item Header */}
      <TimelineItem className="timeline-firstitem">
        <TimelineSeparator>
          <TimelineDot className="timeline-dot-header">{icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" className="timeline-header">
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      {children}
    </Timeline>
  );
};

export const CustomTimelineSeparator = () => {
  return (
    <TimelineSeparator className="separator-padding">
      <TimelineDot variant="outlined" className="timeline-dot" />
      <TimelineConnector />
    </TimelineSeparator>
  );
};

export default CutsomTimeline;
