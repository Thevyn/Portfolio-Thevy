import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import styles from "./styles/ProjectCardStyles";
const useStyles = styles;

const ProjectCard = ({
  imageSrc,
  projectTitle,
  githubLink,
  disabled,
  buttonText,
  demoLink
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea
        href={githubLink}
        target='_blank'
        className={classes.cardHover}
        classes={{ focusHighlight: classes.disableHighlight }}
      >
        <CardMedia
          component='img'
          alt='Projects'
          height='200'
          image={imageSrc}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component='h2'
            className={classes.title}
          >
            {projectTitle}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ justifyContent: "center", alignItems: "center" }}>
        <Button
          disabled={disabled}
          className={classes.button}
          href={demoLink}
          target='_blank'
        >
          {buttonText}
        </Button>
        <Button href={githubLink} target='_blank' className={classes.button}>
          Source
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
