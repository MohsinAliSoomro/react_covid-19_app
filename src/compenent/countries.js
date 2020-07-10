import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
      margin:  'auto',
      
    },
    table:{
        minWidth:650
    }
  }));


export default function Countries() {
    const classes = useStyles();
    const [globaldata, setGlobaldata] = useState([{}])
    const [loading,setLoading]=useState(true)
    useEffect(() => {
        async function fetchapi() {
            const api = await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL')
            const data = await api.json();
            delete data.countryitems[0]["source"];
            //console.log(Object.values(data.countryitems[0])[0].title);
            setGlobaldata(Object.values(data.countryitems[0]))
            setLoading()
        }
        fetchapi()
    }, [globaldata])
    return (
        <TableContainer component={Paper}>
            {loading ? 
            <div className={classes.root}>
                <CircularProgress color="secondary" />
            </div> : 
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead className={classes.header}>
                    <TableRow>
                        {Object.keys(globaldata[0]).map((key,ind)=>{
                            return(
                            <TableCell component="th" scope="row">{key.toUpperCase().replace(/_/g, ' ')}</TableCell>
                            )
                    })}
                    </TableRow>
                </TableHead>
                <TableBody>
                
                    {globaldata.map((key, ind) => (
                        <TableRow key={ind}>
                            <TableCell>{Object.values(key)[0]}</TableCell>
                            <TableCell>{Object.values(key)[1]}</TableCell>
                            <TableCell>{Object.values(key)[2]}</TableCell>
                            <TableCell>{Object.values(key)[3]}</TableCell>
                            <TableCell>{Object.values(key)[4]}</TableCell>
                            <TableCell>{Object.values(key)[5]}</TableCell>
                            <TableCell>{Object.values(key)[6]}</TableCell>
                            <TableCell>{Object.values(key)[7]}</TableCell>
                            <TableCell>{Object.values(key)[8]}</TableCell>
                            <TableCell>{Object.values(key)[9]}</TableCell>
                            <TableCell>{Object.values(key)[10]}</TableCell>
                            <TableCell>{Object.values(key)[11]}</TableCell>
                        </TableRow>
                    ))}
                    
                </TableBody>
            </Table>}
        </TableContainer>
    );
}
