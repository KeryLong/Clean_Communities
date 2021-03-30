

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Trash from '../images/trash.jpg';
import Kid from '../images/kid.jpg';
import '../stylesheets/HomePage.css';
const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    marginTop: 50,
    padding: 10,
    
    
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <div id = "CleanupOptions"> 
    
<Card className={classes.root} id="HomeOptionCard">
<CardActionArea>
  <CardMedia
    component="img"
    alt="Cleaning up trash"
    height="140"
    image={Trash}
    title="Cleaning up trash"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="h2">
      Start a cleanup day
    </Typography>
    <Typography variant="body2" color="textSecondary" component="p">
    A cleaner, safer community starts with one person. Be that person and sign up to start a community cleanup day today. Soon, you'll start to reap the benefits of a cleaner neighbourhood today!
    </Typography>
  </CardContent>
</CardActionArea>
<CardActions>
  <div id="HomoptionButtonDiv">
<Link to="start"><Button variant="contained" id="HomeOptionButton">Let's Start!</Button></Link>
</div>
</CardActions>
</Card>
<Card className={classes.root} id="HomeOptionCard">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Cleaning up trash"
          height="140"
          image={Kid}
          title="A kid leaning up trash"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Find a cleanup day
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Heard of a cleanup day happening near you? Start here to find a cleanup happening in your community or neighbourhood.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
  <div id="HomoptionButtonDiv">
<Button variant="contained" id="HomeOptionButton">Find Now!</Button>
</div>
      </CardActions>
    </Card>
</div>
  );
}