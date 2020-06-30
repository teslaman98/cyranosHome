import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 375,
    backgroundColor: '#fffdc2',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  expansion: {
    width: '100%',
  }
});

export default function ChanCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1a-content"
          id='panel1a-header'>
          <Typography className={classes.heading}>/Pol/</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <CardActions>
          <Button href="https://boards.4chan.org/pol/" size="small">Open</Button>
        </CardActions>
        </ExpansionPanelDetails>
      </ExpansionPanel>
        </CardContent>
    </Card>
  );

}
