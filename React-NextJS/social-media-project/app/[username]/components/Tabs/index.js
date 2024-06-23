"use client";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import PropTypes from "prop-types";
import {
  ProfileContents,
  ProfileFollowers,
  ProfileFollowings,
} from "./sections";

function CustomTabPanel(props) {
  const { children, currentTab, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      className="my-5"
      hidden={currentTab !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {currentTab === index && <div sx={{ p: 3 }}>{children}</div>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  currentTab: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ProfileTabs({ userData }) {
  const [currentTab, setCurrentTab] = useState(0);

  const handleChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <div>
      <div sx={{ width: "100%" }}>
        <div sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={currentTab}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="İçerikler" {...a11yProps(0)} />
            <Tab label="Takipçiler" {...a11yProps(1)} />
            <Tab label="Takip Edilenler" {...a11yProps(2)} />
          </Tabs>
        </div>
        <CustomTabPanel currentTab={currentTab} index={0}>
          <ProfileContents />
        </CustomTabPanel>
        <CustomTabPanel currentTab={currentTab} index={1}>
          <ProfileFollowers />
        </CustomTabPanel>
        <CustomTabPanel currentTab={currentTab} index={2}>
          <ProfileFollowings />
        </CustomTabPanel>
      </div>
    </div>
  );
}
