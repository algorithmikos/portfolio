import React from "react";
import "./Profile.css";
import { Typography } from "@mui/material";
import CustomTimeline, { CustomTimelineSeparator } from "../Timeline/Timeline";

import resumeData from "../../utils/resumeData";

import displayImage from "../../assets/images/displayImage.jpg";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { TimelineContent, TimelineItem } from "@mui/lab";
import CustomButton from "../Button/Button";
import GetAppIcon from "@mui/icons-material/GetApp";
import { Email, Event, Phone } from "@mui/icons-material";

const CustomTimelineItem = ({ text, link, icon }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className="timeline-content">
      {link ? (
        <Typography className="timelineItem-text">
          <span style={{ paddingRight: 1, color: "black" }}>{icon}</span>{" "}
          <a href={link} target="_blank">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem-text">
          <span style={{ paddingRight: 1, color: "black" }}>{icon}</span> {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  const handleDownload = () => {
    // Assume 'fileURL' is the URL of the file you want to download
    const fileURL = "/umar-fayiz-cv.pdf";

    // Create an anchor element
    const downloadLink = document.createElement("a");

    // Set the href attribute to the file URL
    downloadLink.href = fileURL;

    // Set the download attribute with the desired file name
    downloadLink.download = "umar-fayiz-resume.pdf";

    // Append the anchor element to the document body
    document.body.appendChild(downloadLink);

    // Trigger a click event on the anchor element
    downloadLink.click();

    // Remove the anchor element from the document body
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="profile container-shadow">
      <div className="profile-name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>

      <figure className="profile-image">
        <img src={displayImage} alt="" />
      </figure>

      <div className="profile-information">
        <CustomTimeline icon={<PersonOutlineIcon />}>
          <CustomTimelineItem
            title="Birthdate"
            text={resumeData.birthday}
            icon={<Event fontSize="small" sx={{ color: "darkslategray" }} />}
          />
          <CustomTimelineItem
            title="E-Mail"
            text={resumeData.email}
            icon={<Email fontSize="small" sx={{ color: "darkslategray" }} />}
          />
          {/* <CustomTimelineItem
            title="Phone"
            text={resumeData.phone}
            icon={<Phone fontSize="small" />}
          /> */}

          {Object.keys(resumeData.socials).map((key) => (
            <CustomTimelineItem
              key={key}
              text={resumeData.socials[key].text}
              link={resumeData.socials[key].link}
              icon={resumeData.socials[key].icon}
            />
          ))}
        </CustomTimeline>
        <div className="button-container">
          <CustomButton
            text="Download C.V."
            icon={<GetAppIcon />}
            onClick={handleDownload}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
