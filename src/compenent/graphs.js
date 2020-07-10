import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


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

export default function Countries() {
    const classes = useStyles();
    
    // useEffect(() => {
    //     async function fetchapi() {
    //         const api = await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL')
    //         const data = await api.json();
    //         console.log(data);
    //         setGlobaldata(data)
            
    //     }
    //     fetchapi();
    // })
    return (
        <div className={classes.root}>
            <h1>Graphs</h1>
            
        </div>
    );
}
