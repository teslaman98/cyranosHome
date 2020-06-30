import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const apiUrl = 'https://xkcd.com/info.0.json'
async function getXKCD() {
    const response = await fetch(proxyurl + apiUrl);
    const data = await response.json();
    const imgUrl = data.img;
    const enterUrl = " ' " + imgUrl + " ' ";
    return enterUrl;
    console.log(imgUrl);
}

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

export default function Xkcd() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <div>
          <img alt={"that's that"} />
        </div>
      </CardContent>

    </Card>
  );


}






