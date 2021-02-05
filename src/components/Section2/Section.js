import React from "react";
import makeStyles from "./style";
import Img from "../../assests/Image2.png";
import prfl from "../../assests/blog.png";
import logo1 from "../../assests/download.png";
import logo2 from "../../assests/download (1).png";
import logo3 from "../../assests/download (2).png";

function Section() {
  const classes = makeStyles();
  return (
    <div className={classes.mainSec} style={{ backgroundColor: "white" }}>
      <div className={classes.container}>
        <div className={classes.section}>
          <div className={classes.left}>
            <h1 className={classes.title}>CPOHQ</h1>
            <h1 className={classes.h1}>
              Join a world-class community of 500 Chief People Officers.
            </h1>
            <h3 className={classes.h3}>
              You deal with complex and unprecedented challenges daily. Get best
              practices, benchmarks, and ideas from 100s of the world’s most
              innovative companies.
            </h3>
            <div className={classes.btn}>
              <button className={classes.btn1}>Apply Now</button>
              <label className={classes.label}>
                (Free for qualifying CPOs)
              </label>
            </div>
          </div>
          <div className={classes.right}>
            <img className={classes.img} src={Img} />
          </div>
          <div className={classes.sbtn}>
            <button className={classes.btn1}>Apply Now</button>
            <label className={classes.label}>(Free for qualifying CPOs)</label>
          </div>
        </div>
        <div className={classes.bottomPart}>
          <img className={classes.prfl} src={prfl} />
          <div className={classes.bottomContain}>
            <p className={classes.bottomP}>
              "I've been a people leader for 35 years. This is the only
              community I've ever been proud to be a part of.
              <b> This is the best CPO network ever built.</b>"
            </p>
            <h5 className={classes.bottomh5}>
              Sung Hae Kim, Chief People Officer
            </h5>
            <span
              className={classes.span}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
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
