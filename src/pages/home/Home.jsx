import React from "react";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import EjectIcon from "@mui/icons-material/Eject";
import InfoIcon from "@mui/icons-material/Info";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Home.css";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const Home = () => {
  return (
    <div className="home">
      <div className="top__section">
        <div className="top__left">
          <ContactEmergencyIcon fontSize="large" />
        </div>
        <div className="center">
          <HomeIcon fontSize="large" />
          <NotificationsActiveIcon fontSize="large" />
          <EjectIcon fontSize="large" />
          <InfoIcon fontSize="large" />
        </div>
        <div className="top__right">
          <AccountCircleIcon fontSize="large" />
        </div>
      </div>
      <form className="finder__form">
        <h1 style={{ textAlign: "center" }}>ID FINDER</h1>
        <div className="finder__props">
          <label htmlFor="name">STUDENT NAME</label>
          <input type="text" name="name" placeholder="Enter your name" />
        </div>
        <div className="finder__props">
          <label htmlFor="id">STUDENT ID</label>
          <input type="number" name="id" placeholder="10000000" />
        </div>
        <div className="finder__props">
          <label htmlFor="course">COURSE</label>
          <input
            type="text"
            name="course"
            placeholder="Bsc. Information Technology"
          />
        </div>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            row="true"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>
        <div className="submit__finder">
          <input type="submit" value="SEARCH" id="submit" />
        </div>
      </form>
    </div>
  );
};

export default Home;
