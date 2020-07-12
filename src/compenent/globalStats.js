import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Googlemap from './googlemap'
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
            await fetch('https://disease.sh/v3/covid-19/all')
            .then(res=>res.json())
            .then(result=> {
                setGlobaldata(result)
            })
            .catch(err=>{
                console.log(err)
            })
        }
        fetchapi();
    })

    
    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item sm={3} >
                    <Paper className={classes.paper}>
                        <h5>Cases</h5>
                        <h5>{globaldata.cases}</h5>
                    </Paper>
                </Grid>
                <Grid item sm={3} >
                    <Paper className={classes.paper}>
                        <h5>Active Cases</h5>
                        <h5>{globaldata.active}</h5>
                    </Paper>
                </Grid>
                <Grid item sm={3} >
                    <Paper className={classes.paper}>
                        <h5>Deaths</h5>
                        <h5>{globaldata.deaths}</h5>
                    </Paper>
                </Grid>
                <Grid item sm={3} >
                    <Paper className={classes.paper}>
                        <h5>Recovered</h5>
                        <h5>{globaldata.recovered}</h5>
                    </Paper>
                </Grid>
            </Grid>
            <Googlemap />
        </div>
    );
}
