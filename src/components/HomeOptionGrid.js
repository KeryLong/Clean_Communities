import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Trash from '../images/trash.jpg';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& > *': {
      margin: theme.spacing(1),
    
  },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const CenteredGrid = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid> */}
        {/* <Grid item xs={6}>
          {/* <Paper className={classes.paper}><img src={Trash} alt="people cleaning up trash"/></Paper> */}
        </Grid>
        {/* <Grid item xs={6}>
          
          <Button variant="contained">Let's Start!</Button>
          
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        </div>
      </Grid>
    </div> */}
    </div>
  );
}
export default CenteredGrid