import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SkillsCard from "../SkillsCard";
import SvgBrowser from "../../assets/icons/browser.svg";
import SvgDatabase from "../../assets/icons/data.svg";
import SvgServer from "../../assets/icons/tree.svg";
import SvgDeployment from "../../assets/icons/cloud.svg";
import PB from "../../assets/images/thevy.png";

import "../css/About.css";
import AboutStyles from "../styles/AboutStyles";

const useStyles = AboutStyles;

const About = () => {
  const classes = useStyles();

  return (
    <div id='About'>
      <Container>
        <Grid container spacing={4} justify='center'>
          <Grid item sm={6} md={3}>
            <img className={classes.profilePic} src={PB} alt='Profile ' />
          </Grid>
          <Grid item sm={7} md={7} xs={10}>
            <Typography variant='h3' className={classes.aboutHeader}>
              About
            </Typography>
            <Typography variant='h5' className={classes.aboutText}>
              I'm Thevy, a developer with a passion for programming. I love to
              learn about new technologies and get motivated by doing.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <div className={classes.skillsSection}>
        <Container>
          <Grid container>
            <Grid item xs={6} sm={3}>
              <SkillsCard
                icon={SvgBrowser}
                title='Front End'
                technologies={["HTML5", "CSS3", "JavaScript", "React | Redux"]}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <SkillsCard
                icon={SvgServer}
                title='Server'
                technologies={["Java", "Python", "C# | ASP.Net Core"]}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <SkillsCard
                icon={SvgDatabase}
                title='Database'
                technologies={["mySQL", "MongoDB", "PostgreSQL"]}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <SkillsCard
                icon={SvgDeployment}
                title='Deployment'
                technologies={["AWS ECS", "Azure", "Git", "Docker"]}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default About;
