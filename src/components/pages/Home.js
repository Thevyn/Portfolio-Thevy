import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid, Button } from "@material-ui/core";
import Fade from "react-reveal/Fade";

import Resume from "../../assets/Cv-Thevy.pdf";
import "../css/Home.css";

const useStyles = makeStyles(theme => ({
  grid: {
    minHeight: "100vh"
  },
  title: {
    textAlign: "center",

    [theme.breakpoints.down("md")]: {
      fontSize: "2.125rem"
    },
    [theme.breakpoints.up(813)]: {
      fontSize: "3.75rem"
    }
  },
  resumeButton: {
    borderRadius: "100px",
    backgroundColor: "transparent",
    border: "2px solid #fbe555",
    color: "#fff",
    textTransform: "none",
    fontSize: "1rem",
    "&:hover": {
      backgroundColor: "#fbe555",
      color: "#000"
    }
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div id='Home'>
      <div>
        <div className='line' />
        <div className='line' />
        <div className='line' />
      </div>

      <Container maxWidth='lg'>
        <Grid
          container
          spacing={4}
          direction='column'
          alignItems='center'
          justify='center'
          className={classes.grid}
        >
          <Grid item md={8} xs={12}>
            <Typography variant='h2' className={classes.title}>
              <Fade>
                A fullstack developer striving to create user-friendly web
                interfaces.
              </Fade>
            </Typography>
          </Grid>

          <Grid item>
            <Fade cascade delay={500}>
              <Button
                variant='contained'
                className={classes.resumeButton}
                href={Resume}
                target='_blank'
              >
                Download Resume
              </Button>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
