import { makeStyles } from "@material-ui/styles";

const AboutStyles = makeStyles(theme => ({
  aboutHeader: {
    margin: "4rem 4rem 1rem 4rem",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      textAlign: "center"
    },
    [theme.breakpoints.up("md")]: {
      margin: "2rem 6rem"
    }
  },
  aboutText: {
    margin: "0rem 4rem",
    [theme.breakpoints.down("md")]: {
      display: "block",
      width: "90%",
      margin: "2rem auto"
    },
    [theme.breakpoints.up("md")]: {
      margin: "0rem 6rem"
    },
    display: "block",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      margin: "0",
      width: "100%"
    }
  },
  skillsSection: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "10rem"
    },
    [theme.breakpoints.between("sm", "md")]: {
      marginTop: "12rem"
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "6rem"
    }
  },
  profilePic: {
    width: "auto",
    height: "300px"
  }
}));

export default AboutStyles;
