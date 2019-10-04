import React from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";
import Navbar from "./Navbar";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Work Sans"
  },
  palette: {
    background: {
      default: "#000"
    },
    text: {
      primary: "#fff"
    }
  }
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Footer />
      </div>
    </MuiThemeProvider>
  );
};

export default App;
