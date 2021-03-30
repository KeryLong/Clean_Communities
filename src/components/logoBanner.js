import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../stylesheets/NavBar.css';
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
     
          <img id = "Logo" src={Logo} alt="clean communities logo"/>
        
        
        <Typography variant="h2"  id="BannerHeader">
        <span id="boldCapital">C</span>lean  <span id="boldCapital">  C</span>ommunities
      </Typography>
        
        
          <img id = "Logo" src={Logo} alt="clean communities logo"/>
        
      
    </div>
  );
}
export default LogoGrid