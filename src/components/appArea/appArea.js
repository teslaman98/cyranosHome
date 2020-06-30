import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import './appArea.css'
import TwitterApp from "./apps/twitterApp";
import ChanApp from "../appArea/apps/chanApp";
import GitApp from "./apps/gitApp";
import ParlerApp from "./apps/parler";
import IndeedApp from "./apps/indeedApp";
import YoutubeApp from "./apps/youtubeApp";


const useStyles = makeStyles({

});

export default function AppArea() {
  const classes = useStyles();

  return (

    <div className={"container"}>


        <div className={"socialCard"}>
            <TwitterApp/>
        </div>

        <div className={"socialCard"}>
            <ChanApp/>
        </div>

        <div className={"socialCard"}>
            <GitApp/>
        </div>

        <div className={"socialCard"}>
            <ParlerApp/>
        </div>

        <div className={"socialCard"}>
            <IndeedApp/>
        </div>

        <div className={"socialCard"}>
            <YoutubeApp/>
        </div>

    </div>




  );
}
