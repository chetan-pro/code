import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  head: {
    fontSize: "24px",
    padding: "24px 0px",
    fontWeight: "400",
    marginBottom:"24px",
    textAlign:'center',
  },
  slider: {
    width:"100vw",
    paddingBottom:"88px",
    "@media(max-width:768px)":{
      maxWidth:"1000px"
    }
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "250px",
    height: "330px",
    backgroundColor: "white",
    padding: "24px 24px 0px",
    margin: "auto",
  },
  h1: {
    fontSize: "24px",
    fontWeight: "400",
    textAlign: "center",
    marginBottom: "14px",
  },
  h5: {
    fontWeight: "400",
    fontSize: "14px",
  },
}));
