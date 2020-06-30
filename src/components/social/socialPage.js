import React from 'react';
import TwitterCard from "./cards/twitterCard";
import TubeCard from "./cards/youTube";
import {makeStyles} from "@material-ui/core/styles";
import AppArea from "../appArea/appArea";


const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    socialCard:{
        padding: 10,
        margin: 10,
    },
});

export default function SocialPage() {
  const classes = useStyles();

  return (

    <div className={classes.container}>




        <div className={classes.socialCard}>
            <TubeCard/>
        </div>

        <div className={classes.socialCard}>
            <TwitterCard/>
        </div>



    </div>




  );
}
