import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  navbar: {
    position: "sticky",
    top: "0%",
    zIndex: "999",
    width: "100%",
    height: "75px",
    backgroundColor: "white",
    borderBottom:"2px solid #0B2540",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 15px",
    '@media(min-width:1200px)':{
      padding:"16px 150px"
    },
  },
  black:{
    background:"black"
  },
  leftNav: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: "80px",
    marginRight: "20px",
  },
  ul: {
    display: "flex",
    alignItems: "center",
    "@media(max-width:1100px)": {
      position: "absolute",
      top: "75px",
      width: "100%",
      zIndex:"99",
      padding: "15px",
      left: "-100%",
      transition: ".5s",
      textAlign: "left",
      flexDirection: "column",
      alignItems: "flex-Start",
      backgroundColor: "white",
    },
  },
  open:{
    left:"0%"
  },
  li: {
    listStyle: "none",
    "@media(max-width:1100px)": {
      padding: "15px 0px",
      color:"#4b4c4c"
    },
  },
  right:{
    display:"flex",
    alignItems:"center"
  },
  a: {
    padding: "0px 20px",
    fontSize: "16px",
  },
  bars:{
    margin: "0px 20px",
    fontSize: "30px",
    display:"none",
    "@media(max-width:1100px)": {
      display: "inline-block",
    }
  },
  btn: {
    padding: "6px 12px",
    fontSize: "16px",
    backgroundColor: "#fc5130",
    color: "white",
    border: "none",
    outline: "none",
    borderRadius: "5px",
  },
  none: {
    "@media(min-width:1100px)": {
      display: "none",
    }
  },
  nope: {
    "@media(max-width:1100px)": {
      display: "none",
    },
  },
}));
