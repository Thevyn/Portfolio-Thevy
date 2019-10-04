import { makeStyles } from "@material-ui/styles";

const drawerWidth = 240;

const NavbarStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  scroll: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 9999
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    background: "transparent",
    boxShadow: "none"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: drawerWidth
  },
  title: {
    flexGrow: 1,
    marginLeft: 25,
    marginTop: 25,
    letterSpacing: 3,
    textTransform: "uppercase"
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    color: "white",
    background: "#222222"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start"
  },
  menuIcon: {
    color: "#fff",
    margin: "25px 0px 0 0"
  },
  desktopToolbar: {
    "& button": {
      color: "#fff",
      margin: "25px 25px",
      fontSize: "1.5rem",
      textTransform: "none",
      borderRadius: "0",
      "&:hover": {
        backgroundColor: "#000"
      },
      "& a": {
        "&:hover": {
          boxShadow: "inset 0 -2px 0 0 #fbe555"
        }
      },
      [theme.breakpoints.down("sm")]: {
        display: "none"
      }
    }
  },
  iconButton: {
    [theme.breakpoints.down("md")]: {
      display: "inline-flex"
    },
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  drawerButtons: {
    "& button": {
      display: "block",
      width: "100%"
    },
    "& a": {
      color: "#fff",
      textTransform: "none",
      fontSize: "1.5rem",
      borderRadius: 0,
      display: "block",
      width: "100%"
    }
  },
  close: {
    color: "#fff"
  },
  scrollIcon: {
    backgroundColor: "#fbe555",
    color: "#000"
  }
}));

export default NavbarStyle;
