import React from 'react';
import Container from '@material-ui/core/Container';
import NavBar from '../components/NavBar';
import HomeMain from '../components/HomeMain';
import LogoGrid from '../components/logoBanner';
import CenteredGrid from '../components/HomeOptionGrid'
import HomeOptionGrid2 from '../components/HomeOptionGrid2'
import Footer from '../components/Footer'


const Home = () =>{
    return(
<Container>
    <NavBar />
    <LogoGrid />
    <HomeMain />
        <HomeOptionGrid2 />
    <CenteredGrid />
    <Footer /> 
    
</Container>
    )}
export default Home;