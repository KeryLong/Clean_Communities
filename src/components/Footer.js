import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';

import Typography from '@material-ui/core/Typography';
import '../stylesheets/App.css'

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

const Footer = () =>{
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation id='footer'>
      <Typography>
      <h3>© Clean Communities Ltd.</h3>
        </Typography>
        </BottomNavigation>
      
  );
}
export default Footer
