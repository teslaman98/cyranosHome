import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 375,
    backgroundColor: '#ffcbc2',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function TubeCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          YouTube
        </Typography>
        <Typography variant="body2" component="p">

          <br />
          Subscriptions
        </Typography>
      </CardContent>
      <CardActions>
        <Button href="https://www.youtube.com/feed/subscriptions" size="small">Open</Button>
      </CardActions>
    </Card>
  );
}
