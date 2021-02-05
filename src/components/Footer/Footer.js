import React from "react";
import makeStyles from "./style";

function Footer() {
  const classes = makeStyles();

  return (
    <div>
      <div className={classes.blog}>
        <div style={{ marginBottom: "40px" }}>
          <h2 className={classes.h2}>
            "No one understands building for Chief People Officers like Twine"
          </h2>
        </div>
        <button className={classes.btn1}>Join CPOHQ Community</button>
        <button className={`${classes.btn1} ${classes.btn2}`}>
          Request Analytics Access
        </button>
      </div>
      <div className={classes.foot}>
        <span className={classes.tag}>
          <a className={classes.a} style={{paddingLeft:"0px"}}>@ 2020 Twine Labs, Inc</a>
          <a className={classes.a}>Privacy Policy</a>
          <a className={classes.a}>Contact</a>
        </span>
        <img className={classes.link}  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAAy0lEQVR4Ae3VgQnCMBCFYUdwA28ENzDgAm7QbuAIBRxAN+gIjtAROkImkI5wPiDA41kFkwQQBD6A8+AXbdKNuzf1MjheHgH6TOFtAB/uIYIXimDOAQwMFvBKFjAOjODinnimiQP67a+YS/xrCwdcdBQYwHN8CkQIcILYICAaBMaV/2BHT9wMB9rpIdYKbMHWD2h5QA+myWwuCtDsRrtBdst/Ij0ztQOmuz8Z+AfKaWBqEJg4EBoEuhTQe7+KM7+TOWIpNGYa6H6iQENPcdJCO3u14OsAAAAASUVORK5CYII=" />
      </div>
    </div>
  );
}

export default Footer;

