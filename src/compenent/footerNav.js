import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PublicIcon from '@material-ui/icons/Public';
import FlagIcon from '@material-ui/icons/Flag';
import BarChartIcon from '@material-ui/icons/BarChart';

const useStyles = makeStyles({
  root: {
      position:'fixed',
      left:0,
      right:0,
      bottom:0,
      flexDirection:'bottom',
      maxWidth:500,
      margin: '0 auto'
  },
});

export default function FooterNav({screenconfig}) {
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    screenconfig[1](newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={screenconfig[0]}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <Tab icon={<PublicIcon />} label="Global" />
        <Tab icon={<FlagIcon />} label="Countries" />
        <Tab icon={<BarChartIcon />} label="Graphs" />
      </Tabs>
    </Paper>
  );
}
