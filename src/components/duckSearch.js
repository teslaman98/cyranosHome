import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';


const useStyles = makeStyles({
  root: {
    minWidth: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  search: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  box: {
    overflow: 'hidden',
    margin: 0,
    padding: 0,
    minWidth: 320,
    maxWidth: 450,
    height: 39,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SearchCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.search}>
        <iframe className={classes.box} src="https://duckduckgo.com/search.html?focus=yes" frameBorder="0"></iframe>
      </div>

    </Card>
  );
}
