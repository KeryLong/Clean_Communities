import 'date-fns';
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import '../stylesheets/views.css'
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 300,
    },
  }));
  
//   const DateTimePickers =() =>{
//     
  

const RegistrationForm = () => {
  let history = useHistory();
    const classes = useStyles();

    const [currentFilters, setCurrentFilters] = useState([])
    const [CleanUp, setCleanUp] = useState({
      CommunityName:"",
      StreetAddress:"",
      SuiteNumber:"",
      City:"",
      ProvinceOrState:"",
      PostalOrZipCode:"",
      Date:"",
      StartTime:"",
      CoordinatorFirstName:"",
      CoordinatorLastName:"",
      CoordinatorPhoneNumber:"",
      CoordinatorEmailAddress:"",
    });
    const { CommunityName, StreetAddress, SuiteNumber, City, ProvinceOrState, PostalOrZipCode, Date, StartTime, CoordinatorFirstName, CoordinatorLastName, CoordinatorPhoneNumber,CoordinatorEmailAddress } = cleanunp;


    const onSubmit = async Register => {
      Register.preventDefault();
      await axios.post(`/ CC_development/`, CleanUp);
      history.push("/");
  };


    return (
        <form  noValidate autoComplete="off">
           
                <div  id ="FormSection">
                    <div><h2 id ="FormSectionHeader">Community Name & <br /> Meeting Place</h2></div>
                
                <TextField required id="CommunityName" label="Community Name Required" defaultValue="eg Maplewood" />
                <TextField required id="StreetAddress" label="Street Address Required" defaultValue="Street Address" />
                <TextField id="SuiteNumber" label=" Suite Number optional" defaultValue="Suite Number" />
                <TextField required id="City" label=" City Required" defaultValue="City" />
                <TextField required id="ProvinceOrState" label="Province/State Required" defaultValue="Province/State" />
                <TextField required id="PostalOrZipCode" label="Postal or Zip Code Required" defaultValue="Postal/Zip Code" />
                 </div>
                
                <div id ="FormSection">
                    <h2 id ="FormSectionHeader">Cleanup Date and time</h2>
                    <TextField required id="date"
        label="Cleanup Date Required"
        type="Date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
  <TextField required
        id="StartTime"
        label="Start Time Required"
        type="time"
        defaultValue="09:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        
        inputProps={{
          step: 300, // 5 min
        }}
      />
      <TextField required
        id="time"
        label="End Time Required"
        type="time"
        defaultValue="17:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        
        inputProps={{
          step: 300, // 5 min
        }}
      />
               
                </div>
               
            
            <div id ="FormSection">
                <h2 id ="FormSectionHeader"> Coordinator Information</h2>
                <p> Contact information for the Cleanup coordinator</p>
                <TextField required
                    required
                    id="CoordinatorFirstName"
                    label="Coordinator Required"
                    defaultValue="Coordinator First Name"/>

                <TextField required                  
                    id="CoordinatorLastName"
                    label="Coordinator Last Name Required"
                    defaultValue="Coordinator Last Name"/>

                  <TextField required                  
                    id="CoordinatorPhoneNumber"
                    label="Coordinator Phone Number Required"
                    defaultValue="Coordinator Phone Number"/>

                    <TextField required                  
                    id="CoordinatorEmailAddress"
                    label="Coordinator Email Address Required"
                    defaultValue="Coordinator Email Address"/>
   
                
                
              
            
      <div id ="RegisterButtonDiv">
            <Button id="RegisterButton" variant="contained" onClick={e => { onSubmit(Register) }} as={Link} to="/">register</Button>
            </div></div>
        </form>
    );
}
export default RegistrationForm