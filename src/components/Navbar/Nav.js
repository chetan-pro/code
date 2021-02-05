import React from "react";
import makeStyles from "./style";
import logo from "../../assests/logo.png";
import HorizontalSplitIcon from "@material-ui/icons/HorizontalSplit";

function Nav() {
  const classes = makeStyles();
  const ul = document.querySelector("#ul");
  function sider(){
    ul.classList.toggle(classes.open);
  };

  return (
    <div id="nav" className={classes.navbar}>
      <div id="left" className={classes.leftNav}>
        <img className={classes.logo} src={logo} />
        <ul id="ul" className={classes.ul}>
          <li className={classes.li}>
            <a className={classes.a}>People Analytics</a>
          </li>
          <li className={classes.li}>
            <a className={classes.a}>CPOHQ</a>
          </li>
          <li className={classes.li}>
            <a className={classes.a}>Ten(ish) Tips</a>
          </li>
          <li className={classes.li}>
            <a className={classes.a}>Our Story</a>
          </li>
          <li className={classes.li}>
            <a className={classes.a}>Careers</a>
          </li>
          <li className={`${classes.li} ${classes.none}`}>
            <a className={classes.a}>Sign in</a>
          </li>
        </ul>
      </div>
      <div className={classes.right}>
        <button className={classes.btn}>Request Demo</button>
        <span onClick={sider} className={classes.bars}>
          <HorizontalSplitIcon />
        </span>
        <a className={`${classes.a} ${classes.nope}`}>Sign in</a>
      </div>
    </div>
  );
}

export default Nav;
