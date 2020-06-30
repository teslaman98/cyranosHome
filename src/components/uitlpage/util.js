import React from 'react';
import JumpCard from "./cards/jumbScript";
import {makeStyles} from "@material-ui/core/styles";
import AppArea from "../appArea/appArea";


const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 375,
    },
    socialCard:{
        padding: 10,
        margin: 10,
    },
});

export default function UtilPage() {
    const classes = useStyles();

    return(
        <div className={classes.container}>
            <div className={classes.socialCard}>
                <JumpCard/>
            </div>
            <div className={classes.socialCard}>
                <AppArea/>
            </div>

        </div>
    );
}
