import React from "react";
import styles from "./contentbox.module.css";

const ContentBox = ({
  aboutVisible,
  projectsVisible,
  redirectVisible,
  contactVisible,
  marqueeVisible,
}) => {
  return (
    <div className={styles["content"]}>
      {aboutVisible && (
        <div className={styles["about"]}>
          Girl On Road is a design and technology studio focusing on branding,
          creative coding, interaction design and web development and design.
        </div>
      )}
      {projectsVisible && (
        <div className={styles["projects"]}>
          <a href="https://terrain.earth/" target="_blank">
            TERRAIN Branding and Web Development
          </a>
          <br />
          <a href="https://skyline.ozelot.ltd/" target="_blank">
            ASCII Skyline with Ozelot Studios
          </a>
          <br />
          <a href="https://girlonroad.tech/discover/index.html" target="_blank">
            G.O.R. Discover Alternative Archive
          </a>
          <br />
        </div>
      )}
      {redirectVisible && (
        <div className={styles["redirect"]}>
          <a href="https://www.instagram.com/girlonroad.tech" target="_blank">
            Instagram
          </a>
          <br />
          <a href="https://soundcloud.com/girlonroadtech" target="_blank">
            Soundcloud
          </a>
          <br />
        </div>
      )}
      {contactVisible && (
        <div className={styles["contact"]}>email: contact@girlonroad.tech</div>
      )}
      {marqueeVisible && (
        <marquee width="100%" className={styles["marquee"]}>
          drawing connections in the disconnect, through digital pulses and
          energetic waves
        </marquee>
      )}
    </div>
  );
};
export default ContentBox;
