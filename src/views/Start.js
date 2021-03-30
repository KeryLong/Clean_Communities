import React from 'react';
import Container from '@material-ui/core/Container';
import NavBar from '../components/NavBar';

import LogoGrid from '../components/logoBanner';
import Footer from '../components/Footer'

const StartPage =() =>{
    return(
        <Container>
        <NavBar />
        <LogoGrid />
        <h1>Start Page</h1>
        <Footer />
        </Container>

    )
   
}
 export default StartPage;