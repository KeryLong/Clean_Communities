import React from 'react';
import Container from '@material-ui/core/Container';
import '../stylesheets/views.css';
import image from "../images/trash.jpg"

const RegisterBanner = () => {
    return (
               
                 
                    <Container maxWidth="lg" id="pageBanner">
                        <img src={image} id="pageImage"/>
                        <p id = "bannerPara"> You've taken a big step toward making your community/neighbourhood cleaner and achieving all of the great benefits of having a clean community. Fill out the form below to get started!</p>
                    </Container>
                
        

    );
}
export default RegisterBanner