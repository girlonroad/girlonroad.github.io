import React, { useState } from "react";
import styles from "./header.module.css";
import MenuItem from "../MenuItem/MenuItem";
import ContentBox from "../ContentBox/ContentBox";

const Header = () => {
  const [aboutVisible, setAboutVisible] = useState(false);
  const [redirectVisible, setRedirectVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [marqueeVisible, setMarqueeVisible] = useState(true);

  const handleAboutClick = () => {
    setAboutVisible(!aboutVisible);
    setProjectsVisible(false);
    setRedirectVisible(false);
    setContactVisible(false);
  };
  const handleProjectsClick = () => {
    setAboutVisible(false);
    setProjectsVisible(!projectsVisible);
    setRedirectVisible(false);
    setContactVisible(false);
  };

  const handleRedirectClick = () => {
    setAboutVisible(false);
    setProjectsVisible(false);
    setRedirectVisible(!redirectVisible);
    setContactVisible(false);
  };

  const handleContactClick = () => {
    setAboutVisible(false);
    setProjectsVisible(false);
    setRedirectVisible(false);
    setContactVisible(!contactVisible);
  };

  return (
    <>
      <div className={styles["flexbox"]}>
        <div className={styles["header"]}>
          <MenuItem
            label={"About"}
            color="rgb(165, 153, 148)"
            onClick={handleAboutClick}
            visible={aboutVisible}
          />
          <MenuItem
            label={"Projects"}
            color="rgb(142, 129, 123)"
            onClick={handleProjectsClick}
            visible={projectsVisible}
          />
          <MenuItem
            label={"Redirect"}
            color="rgb(130, 114, 108)"
            onClick={handleRedirectClick}
            visible={redirectVisible}
          />
          <MenuItem
            label={"Contact"}
            color="rgb(112, 96, 87)"
            onClick={handleContactClick}
            visible={contactVisible}
          />
        </div>
        {/* Pass visibility state to ContentBox */}
        <ContentBox
          aboutVisible={aboutVisible}
          projectsVisible={projectsVisible}
          redirectVisible={redirectVisible}
          contactVisible={contactVisible}
          marqueeVisible={marqueeVisible}
        />
      </div>
    </>
  );
};

export default Header;
