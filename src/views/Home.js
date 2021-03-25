import React from 'react';
import Container from '@material-ui/core/Container';
import NavBar from '../components/NavBar';
import HomeMain from '../components/HomeMain'
import HomeOptionGrid from '../components/Home OptionGrid'


const Home = () =>{
    return(
<Container>
    <NavBar />
    <HomeMain />
    <HomeOptionGrid />
</Container>
    )}
export default Home;