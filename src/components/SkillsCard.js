import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  title: {
    textAlign: "center"
  },
  icon: {
    display: "block",
    width: "50%",
    margin: "2rem auto"
  },
  card: {
    height: "100%",
    border: "2px solid #3a3a3a",
    backgroundColor: "#000",
    color: "#fff"
  },
  skillsTitle: {
    textDecoration: "none",
    position: "relative",
    marginBottom: "2.5rem",
    textAlign: "center",
    "&:after": {
      content: "''",
      width: "20px",
      height: "2px",
      background: "#fbe555",
      position: "absolute",
      left: "50%",
      bottom: "-15px",
      transform: "translateX(-50%)"
    }
  }
});

class CardList extends React.Component {
  renderList() {
    const { classes } = this.props;

    return this.props.technologies.map(technology => {
      return (
        <Typography
          paragraph
          key={technology}
          variant='subtitle1'
          component='p'
          className={classes.title}
        >
          {technology}
        </Typography>
      );
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardContent>
          <img
            src={this.props.icon}
            width='40px'
            height='40px'
            alt='Project'
            className={classes.icon}
          />
          <Typography variant='h5' gutterBottom className={classes.skillsTitle}>
            {this.props.title}
          </Typography>
          {this.renderList()}
        </CardContent>
      </Card>
    );
  }
}

CardList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardList);
