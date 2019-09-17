import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SimpleModal from "../modal/popup";
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
    fontSize: 24
  },
  pos: {
    marginBottom: 12
  }
});

const saySomething = () => {
  alert("Something was said!");
};

const Body = props => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className="body-content">
      <div className="body-info">
        {props.teams.map(team => (
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography
                className={classes.title}
                color="textPrimary"
                align="left"
                gutterBottom
                variant="h3"
              >
                {team.teamName} Team
              </Typography>

              <Typography
                color="textSecondary"
                variant="body2"
                align="left"
                component="ul"
              >
                {team.players.map((player, index) => (
                  <li>{player}</li>
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
            </CardActions>
          </Card>
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
