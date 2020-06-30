import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
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
  },
});

export default function JumpCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>JumpScript</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>

            alias +crouchjump "+jump; +duck" <br/>
            <br/>
            alias -crouchjump "-duck; -jump" <br/>
            <br/>
            bind "space" "+crouchjump" <br/>


          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </CardContent>
    </Card>
  );

}

