import { makeStyles } from "@material-ui/styles";

const ProjectCardStyles = makeStyles(theme => ({
  card: {
    maxWidth: 400,
    backgroundColor: "#000",
    color: "#fff",
    border: "2px solid #3a3a3a",
    padding: "1rem",
    margin: "0 auto"
  },
  button: {
    borderRadius: "100px",
    backgroundColor: "transparent",
    border: "2px solid #fbe555",
    color: "#fff",
    textTransform: "none",
    fontSize: "1rem",
    minWidth: "100px",
    marginRight: "5px",
    "&:hover": {
      backgroundColor: "#fbe555",
      color: "#000"
    },
    "&:disabled": {
      color: "#fff",
      border: "2px solid #3a3a3a"
    }
  },
  cardAction: {
    alignContent: "center",
    justifyContent: "center"
  },
  title: {
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      width: "max-content",
      margin: "0 auto"
    }
  },
  disableHighlight: {
    backgroundColor: "inherit"
  },
  cardHover: {
    "&:hover": {
      "& div": {
        "& h2": {
          [theme.breakpoints.up("md")]: {
            boxShadow: "inset 0 -2px 0 0 #fbe555"
          }
        }
      }
    }
  }
}));

export default ProjectCardStyles;
