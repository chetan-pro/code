import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  mainSec: {
    padding: "80px 0px",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
    margin: "auto",
    width: "1220px",
    "@media(max-width:1050px)": {
      width: "960px",
    },
    "@media(max-width:950px)": {
      flexDirection: "column",
      width: "720px",
    },
    "@media(max-width:768px)": {
      width: "540px",
    },
    "@media(max-width:576px)": {
      width: "100%",
    },
  },
  section: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    width: "100%",
    "@media(max-width:950px)": {
      flexDirection: "column",
    },
  },
  left: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    width: "50%",
    "@media(max-width:950px)": {
      width: "100%",
      alignItems: "center",
      textAlign: "center",
    },
  },
  title: {
    color: "#527dbf",
    fontSize: "30px",
    marginBottom: "40px",
  },
  h1: {
    fontSize: "48px",
    color: "#0b2540",
    marginBottom: "40px",
    lineHeight: "1.5",
    "@media(max-width:950px)": {
      fontSize: "38px",
    },
  },
  h3: {
    fontSize: "24px",
    color: "#0000000D9",
    opacity: ".7",
    fontWeight: "400",
    marginBottom: "40px",
    "@media(max-width:950px)": {
      fontSize: "18px",
    },
  },
  btn: {
    "@media(max-width:950px)": {
      display: "none",
    },
  },
  btn1: {
    width: "240px",
    height: "60px",
    transition: "all .3s",
    cursor: "pointer",
    padding: "6.4px 15px",
    fontSize: "18px",
    backgroundColor: "#355bb7",
    color: "white",
    border: "1px solid #white",
    borderRadius: "6px",
    marginBottom: "12px",
    "&:hover": {
      backgroundColor: "#284b9d",
    },
    "@media(max-width:768px)": {
      width: "95%",
    },
  },

  label: {
    padding: "4px 12px",
    fontSize: "16px",
    color: "#000000d9",
  },
  sbtn: {
    display: "none",
    "@media(max-width:950px)": {
      display: "flex",
      alignItems: "center",
    },
    "@media(max-width:768px)": {
      flexDirection: "column",
      width: "100%",
    },
  },
  right: {
    width: "50%",
    "@media(max-width:950px)": {
      width: "100%",
    },
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  leftBorder: {
    position: "absolute",
    bottom: "-1px",
    left: "-1px",
    borderBottom: "6vh solid #f5f8f9",
    borderRight: "20vw solid transparent",
  },
  rightBorder: {
    position: "absolute",
    bottom: "-1px",
    right: "-1px",
    borderBottom: "6vh solid #f5f8f9",
    borderLeft: "20vw solid transparent",
  },
  bottomPart: {
    marginTop: "60px",
    maxWidth: "70%",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    "@media(max-width:950px)": {
      maxWidth: "100%",
      flexDirection: "column",
      textAlign: "center",
    },
    "@media(max-width:750px)": {
    },
  },
  prfl: {
    width: "150px",
    height: "150px",
    // padding:"0px 24px",
    marginRight: "50px",
    "@media(max-width:950px)": {
      marginRight: "0px",
      marginBottom: "24px",
    },
  },
  bottomContain:{
    width:"100%",
    '@media(max-width:950px)':{
      width:"100%"
    }
  },
  bottomP: {
    fontSize: "18px",
    color: "#000000d9",
    marginBottom: "20px",
  },
  bottomh5: {
    color: "#000000D9",
    fontSize: "16px",
    marginBottom: "20px",
    fontWeight: "400",
  },
  span: {
    display: "flex",
    alignItems: "center",
    "@media(max-width:950px)": {
      justifyContent: "center",
    },
  },
  logo: {
    padding: "12px",
    '@media(max-width:750px)':{
      width:"100px"
    }
  },
}));
