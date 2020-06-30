import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles({
  root: {
    minWidth: 100,
    maxWidth: 100,
    maxHeight: 100,
    backgroundColor: '#fffdc2',

  },
  Logo: {
    width: '100%',
    height: 'auto',
  },
  title: {
    fontSize: 14,
  },
  expansion: {
    width: '100%',
  },

});

export default function TwitterApp() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
          <a href={"https://twitter.com/home"}>
            <img className={classes.Logo} src={require("../../../media/twitterIcon.png")} alt={"4Chan"}/>
          </a>
      </CardContent>

    </Card>
  );

}
