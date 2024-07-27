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

export default function ProfileTabs({
  userData,
  setUserData,
  currentUsername,
}) {
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
          {userData?.publications?.length > 0 ? (
            <ProfileContents
              userData={userData}
              setUserData={setUserData}
              currentUsername={currentUsername}
            />
          ) : (
            <div className="text-center text-gray-400">
              Bu kullanıcı içerik paylaşmamış.
            </div>
          )}
        </CustomTabPanel>
        <CustomTabPanel currentTab={currentTab} index={1}>
          {userData?.userFollowers?.length > 0 ? (
            <ProfileFollowers userData={userData} />
          ) : (
            <div className="text-center text-gray-400">
              Bu kullanıcının takipçisi bulunmamaktadır.
            </div>
          )}
        </CustomTabPanel>
        <CustomTabPanel currentTab={currentTab} index={2}>
          {userData?.following?.length > 0 ? (
            <ProfileFollowings userData={userData} />
          ) : (
            <div className="text-center text-gray-400">
              Bu kullanıcı kimseyi takip etmiyor.
            </div>
          )}
        </CustomTabPanel>
      </div>
    </div>
  );
}
