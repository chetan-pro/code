import React from "react";
import makeStyles from "./style";
import Img1 from "../../assests/Image1.png";

function Section() {
  const classes = makeStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
      <div className={classes.left}>
        <h1 className={classes.h1}>Twine gives<br />Chief People Officers<br/> superpowers.</h1>
        <h3 className={classes.h3}>Twine is the #1 Analytics Platform + Community for CPOs, built alongside 500 leading Heads of People.</h3>
        <div className={classes.btndiv}>
        <button className={classes.btn1}>Join CPOHQ Community</button>
        <button className={`${classes.btn1} ${classes.btn2}`}>Request Analytics Access</button>
        </div>
      </div>
      <div className={classes.right}>
        <img className={classes.img} src={Img1} />
      </div>
      <div className={`${classes.btndiv} ${classes.sbtn}`}>
        <button className={classes.btn1}>Join CPOHQ Community</button>
        <button className={`${classes.btn1} ${classes.btn2}`}>Request Analytics Access</button>
        </div>
        </div>
      <div className={classes.leftBorder}></div>
      <div className={classes.rightBorder}></div>
    </div>
  );
}

export default Section;
