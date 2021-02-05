import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  blog: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "50px",
    backgroundColor: "#0B2540",
  },
  slider: {
    height: "200px",
    width: "70vw",
    backgroundColor: "transparent",
  },
  h2: {
    width: "100%",
    fontSize: "30px",
    fontWeight: "600",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "white",
  },
  btn1: {
    transition: "all .3s",
    cursor: "pointer",
    padding: "6.4px 15px",
    fontSize: "18px",
    backgroundColor: "white",
    color: "black",
    border: "1px solid #white",
    "&:hover": {
      color: "#40a9ff",
      borderColor: "#40a9ff",
    },
    borderRadius: "6px",
    height: "60px",
    width: "30%",
    marginBottom: "12px",
    '@media(max-width:950px)':{
      width: "70%",
    },
    '@media(max-width:650px)':{
      width: "100%",
    }
  },
  btn2: {
    border: "1px solid white",
    backgroundColor: "transparent",
    color: "white",
    "&:hover": {
      borderColor: "red",
      color: "white",
    },
  },
  foot: {
    display: "flex",
    justifyContent: "space-between",
    alignItems:"center",
    minHeight: "64px",
    padding: "8px 15px",
    backgroundColor: "#4b4c4c",
    color: "white",
    '@media(min-width:1200px)':{
      padding:"8px 150px"
    },
  },
  tag: {
    display: "flex",
    alignItems: "center",
  },
  a:{
      fontSize:"16px",
      fontWeight:"400",
      padding:"16px",
      "@media(max-width:768px)": {
        padding:"8px",
      },
  },
  link:{
    width:"24px",
    height:"25px",
    "@media(max-width:560px)": {
      display:"none"
    },
  }
}));
