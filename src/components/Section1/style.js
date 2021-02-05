import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  section:{
    position:"relative",
    padding:"80px 0px",
    background:
    "linear-gradient(286.99deg,rgba(245,248,249,0) -120.32%,#afc0d1 -84.72%,#527dbf -39.41%,#527dbf 25.33%,#0b2540 133.25%)",
    "@media(max-width:576px)":{
      paddingLeft:"15px",
      paddingRight:"15px"
    }
  },
  container: {
    margin:"auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    width: "1220px",  
    "@media(max-width:1050px)":{
      width:"960px",
    },
    "@media(max-width:950px)":{
      flexDirection:"column",
      width:"720px",
    },
    "@media(max-width:768px)":{
      width:"540px",
    },
    "@media(max-width:576px)":{
      width:"100%",
    }
  },
  left: {
    display: "flex",
    flexDirection: "column",
    flex: "1",
    "@media(max-width:950px)":{
      alignItems:"center",
      textAlign:"center"
    }
  },
  h1: {
    fontSize: "48px",
    color: "white",
    marginBottom: "20px",
    lineHeight: "1.5",
    "@media(max-width:950px)":{
      fontSize:"38px"
    }
  },
  h3: {
    fontSize: "24px",
    color: "#f5f8f9",
    opacity: ".7",
    fontWeight: "400",
    marginBottom: "40px",
    "@media(max-width:950px)":{
      fontSize:"18px"
    }
  },
  btndiv:{
    display:"flex",
    flexDirection:"column",
    "@media(max-width:950px)":{
      display:"none"
    }
  },
  sbtn:{
    display:"flex",
    width:"100%",
    "@media(min-width:950px)":{
      display:"none"
    }
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
    marginBottom: "12px",
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
  right: {
    maxWidth: "50%",
    "@media(max-width:950px)":{
    maxWidth: '100%',
    }
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
}));
