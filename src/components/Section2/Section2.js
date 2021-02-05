import React from "react";
import makeStyles from "./style";
import Img from "../../assests/Image3.png";
import prfl from "../../assests/blog2.png";
import logo1 from "../../assests/download (3).png";
import logo2 from "../../assests/download (4).png";
import logo3 from "../../assests/download (5).png";

function Section() {
  const classes = makeStyles();
  return (
    <div className={classes.mainSec} >
    <div className={classes.container}>
      <div className={classes.section}>
        <div className={classes.left}>
          <h1 className={classes.title}>PEOPLE ANALYTICS PLATFORM</h1>
          <h1 className={classes.h1}>
            They say People & HR 
            leaders aren’t data driven.
            Let’s change that.
          </h1>
          <h3 className={classes.h3}>
            In 2021’s remote-first world, it’s critical to monitor, measure, and
            manage your “people metrics.” Twine empowers you to make data-driven
            decisions.
          </h3>
          <div className={classes.btn}>
          <button className={classes.btn1} style={{ width: "60%" }}>
            Request CPO Analytics Access
          </button>
          </div>
        </div>
        <div className={classes.right}>
          <img className={classes.img} src={Img} />
        </div>
        <button className={`${classes.btn1} ${classes.sbtn}`} style={{ width: "60%" }}>
            Request CPO Analytics Access
          </button>
      </div>
      <div className={classes.bottomPart}>
        <img className={classes.prfl} src={prfl} />
        <div className={classes.bottomContain}>
          <p className={classes.bottomP}>
            Twine helps people teams be just as data-driven as our product and
            revenue teams.
            <b>
              It's the perfect partner for a Chief People Officer leading in
              hypergrowth.
            </b>
            "
          </p>
          <h5 className={classes.bottomh5}>
            Andriana Roche, Head of People, Culture and Places
          </h5>
          <span className={classes.span}>
            <img
              style={{ paddingLeft: "0px" }}
              className={classes.logo}
              src={logo1}
            />
            <img className={classes.logo} src={logo2} />
            <img className={classes.logo} src={logo3} />
          </span>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Section;
