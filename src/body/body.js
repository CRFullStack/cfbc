import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SimpleModal from "../modal/popup";
import Delete from "@material-ui/icons/DeleteOutlined";
import TransitionGroup from "react-transition-group/TransitionGroup";
import Fade from "react-reveal/Fade";

import "./body.scss";

const useStyles = makeStyles({
  card: {
    background: "#ccc",
    margin: "8px 16px",
    padding: "0 36px"
  },
  cardContent: {
    padding: "16px 0"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 24,
    textTransform: "capitalize"
  },
  pos: {
    marginBottom: 12
  },
  info: {
    padding: "8px 16px"
  }
});

const Body = props => {
  const classes = useStyles();
  const groupProps = {
    appear: true,
    enter: true,
    exit: true
  };

  useEffect(() => {
    props.getData();
  }, []);

  return (
    <div className="body-content">
      <div className="body-header">
        <Typography
          variant="h3"
          gutterBottom
          align="center"
          className={classes.info}
        >
          Welcome to the CFBC Family Feud sign up page!
        </Typography>
        <Typography variant="h6" gutterBottom align="center">
          <p>Here are some instructions for using the site:</p>
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          align="center"
          color="textSecondary"
          className={classes.info}
        >
          <p>
            You can add teams by using the "add team!" button at the bottom of
            the site.
          </p>
          <p>You can delete a team by clicking the trash can.</p>
          <p>
            Finally you can delete players by directly clicking on the person's
            name.
          </p>
        </Typography>
      </div>
      <div className="body-info">
        {props.teams.map(team => (
          <Fade bottom>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography
                  className={classes.title}
                  color="textPrimary"
                  align="left"
                  gutterBottom
                  variant="h3"
                >
                  Team {team.teamName}
                </Typography>

                <Typography
                  color="textSecondary"
                  variant="body2"
                  align="left"
                  component="ul"
                >
                  {team.players.map((player, index) => (
                    <Fade collapse bottom>
                      <li
                        onClick={() =>
                          props.deletePlayer(team.teamName, player)
                        }
                      >
                        {player}
                      </li>
                    </Fade>
                  ))}
                </Typography>
              </CardContent>
              <CardActions>
                <SimpleModal
                  title="Add Player!"
                  subTitle="Click to add player!"
                  teamName={team.teamName}
                  runFunc={props.addPlayer}
                />
                <IconButton aria-label="add to favorites" color="secondary">
                  <Delete
                    onClick={() => {
                      props.deleteTeam(team.teamName);
                    }}
                  />
                </IconButton>
              </CardActions>
            </Card>
          </Fade>
        ))}
      </div>
      <div className="body-button">
        <SimpleModal
          title="Add Team!"
          subTitle="Click to add team!"
          runFunc={props.addTeam}
        />
      </div>
    </div>
  );
};

export default Body;
