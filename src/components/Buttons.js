import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import Trash from '../images/trash.jpg';
import Find from '../images/hill.jpg';
import Volunteer from '../images/cc.jpg';
import Sponsor from '../images/sponsor.jpg';
import  '../stylesheets/HomePage.css';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const HomeActionButtons = () => {
  const [navLinkOpen, navLinkToggle] = useState(false);

  const handleNavLinksToggle = () => {
    navLinkToggle(!navLinkOpen);
  };
  const renderClasses = () => {
    let classes = "navlinks";
    if (navLinkOpen) {
      classes += " active";
    }
    return classes;
  };

  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <nav>
      <Grid container className={classes.root} spacing={2} id="HomeButtonGrid">
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing} >
          {[0].map((value) => (
            <Link to="/Register" className="nav-link"><Grid key={value} item id="homeButtonContainer">
              <img src={Trash} id="buttonImg" alt="start a clean up"/>
                <Typography id="HomeActionLink"> Start a clean up</Typography>
            </Grid></Link>
          ))}
          {[1].map((value) => (
            <Grid key={value} item id="homeButtonContainer">
             <img src={Find} id="buttonImg" alt="Find a cleanup"/>
                <Typography id="HomeActionLink"> Find a clean up</Typography>
            </Grid>
          ))}
           {[2].map((value) => (
            <Grid key={value} item id="homeButtonContainer">
             <img src={Volunteer} id="buttonImg" alt="Volunteer for a cleanup"/>
                <Typography id="HomeActionLink"> Volunteer for a clean up</Typography>
            </Grid>
          ))}
             {[3].map((value) => (
            <Grid key={value} item id="homeButtonContainer">
             <img src={Sponsor} id="buttonImg" alt="Sponsor a cleanup"/>
                <Typography id="HomeActionLink"> Sponsor a clean up</Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      
    </Grid>
    </nav>
   );
  
}
export default HomeActionButtons