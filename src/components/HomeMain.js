import React from 'react';
import Container from '@material-ui/core/Container';

import '../stylesheets/HomePage.css';
import HillImg from '../images/hill.jpg'




const HomeMain = () => {
    return (
        <Container id="HomeContent">


            <div id="HomeMainContainer">
                <div id="HomeMainImage">
                    <img src={HillImg} id="HomeMainImage" alt="A clean park in the middle of a city" /></div>
                <div id="homeMainPara"><p>Looking for a way to give back to your community? Organizing a neighborhood cleanup is a great way to do just that while also making your neighborhood a better place to live. For a community cleanup to be successful, it must be well-planned. From picking the right project to recruiting enough volunteers, putting together an effective event takes effort.
            </p>

                </div>
            </div>
            
        </Container>



    )

};
export default HomeMain