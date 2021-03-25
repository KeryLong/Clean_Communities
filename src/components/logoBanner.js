import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../stylesheets/AppBar.css'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Logo from '../images/Logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const LogoGrid = () => 
{
  const classes = useStyles();

  return (
    <div className={classes.root}id ="Banner">
      <Grid container spacing={3}>
        <Grid item xs={2} md={3}>
          <img id = "Logo" src={Logo} alt="clean communities logo"/>
        </Grid>
        <Grid item xs={8} md={6}>
        <Typography variant="h1"  id="BannerHeader">
        Clean Communities
      </Typography>
        </Grid>
        <Grid item xs={2} md={3}>
          <img id = "Logo" src={Logo} alt="clean communities logo"/>
        </Grid>
        </Grid>
      
    </div>
  );
}
export default LogoGrid