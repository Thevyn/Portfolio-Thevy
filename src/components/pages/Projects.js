import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ProjectCard from "../ProjectCard";
import finnreise from "../../assets/images/Finnreise.jpg";
import stream from "../../assets/images/Stream.gif";

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: "4em",
    textAlign: "center"
  }
}));

const Streaming = {
  image: stream,
  title: "Streamy",
  text: "Livestream with OBS",
  source: "https://github.com/Thevyn/Streams"
};

const FinnReise = {
  image: finnreise,
  title: "Railway ticket booking",
  text: "A system to buy ticket",
  source: "https://github.com/Thevyn/FinnReise",
  demoLink: "https://finnreise.azurewebsites.net/"
};

const Projects = () => {
  const classes = useStyles();
  return (
    <div id='Projects'>
      <Typography variant='h4' className={classes.title}>
        Project Portfolio
      </Typography>
      <Container>
        <Grid
          container
          spacing={4}
          alignItems='center'
          justify='center'
          style={{
            marginTop: "3rem"
          }}
        >
          <Grid item xs={10} sm={8} md={5}>
            <ProjectCard
              projectTitle={Streaming.title}
              text={Streaming.text}
              imageSrc={Streaming.image}
              technology={Streaming.technology}
              githubLink={Streaming.source}
              disabled={true}
              buttonText='Demo Unavailable'
            />
          </Grid>
          <Grid item xs={10} sm={8} md={5}>
            <ProjectCard
              projectTitle={FinnReise.title}
              text={FinnReise.text}
              imageSrc={FinnReise.image}
              technology={FinnReise.technology}
              githubLink={FinnReise.source}
              buttonText='Demo '
              demoLink={FinnReise.demoLink}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Projects;
