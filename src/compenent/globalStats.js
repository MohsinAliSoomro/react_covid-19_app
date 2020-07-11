import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 10
    },
    paper: {
        padding: theme.spacing(4),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function CenteredGrid() {
    const classes = useStyles();
    const [globaldata, setGlobaldata] = useState([]);
    useEffect(() => {
        async function fetchapi() {
            // const api = await fetch('https://api.thevirustracker.com/free-api?global=stats')
            const api = await fetch('https://disease.sh/v3/covid-19/all')
            const data = await api.json();
            console.log(data);
            setGlobaldata(data)
        }
        fetchapi();
    })
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {Object.keys(globaldata).map((data, ind) => {
                    return (
                        <Grid item sm={4} key={ind}>
                            <Paper className={classes.paper}>
                                <h4>{data.toUpperCase()}</h4>
                                <h3>{globaldata[data]}</h3>
                            </Paper>
                        </Grid>
                    );

                })}


            </Grid>
        </div>
    );
}
