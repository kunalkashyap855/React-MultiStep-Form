import React, { useState } from "react";
import {
  Step,
  Stepper,
  StepLabel,
  Button,
  Typography,
  Card,
  CardContent
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// components
import UserDetails from "./UserDetails";
import PersonalDetails from "./PersonalDetails";
import ContactDetails from "./ContactDetails";
import Confirmation from "./Confirmation";

const useStyles = makeStyles(theme => ({
  card: {
    width: "50%;"
  },
  root: {
    width: "100%"
  },
  backButton: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

function getSteps() {
  return ["User Details", "Personal Details", "Contact Details", "Confirm"];
}

const Steps = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [about, setAbout] = useState("");
  const [mobile, setMobile] = useState("");
  const [occupation, setOccupation] = useState("");
  const [gender, setGender] = useState("");

  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleUserChange = values => {
    setFirstName(values.firstName);
    setLastName(values.lastName);
    setEmail(values.email);
  };

  const handlePersonalChange = values => {
    setGender(values.gender);
    setAbout(values.about);
    setOccupation(values.occupation);
  };

  const handleContactChange = values => {
    setAddress(values.address);
    setMobile(values.mobile);
  };

  const handleFormSubmit = () => {
    console.log("Form Submitted!", {
      firstName,
      lastName,
      email,
      mobile,
      gender,
      occupation,
      about,
      address
    });
  };

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <UserDetails
            firstName={firstName}
            lastName={lastName}
            email={email}
            handleChange={handleUserChange}
            handleNext={handleNext}
            handleBack={handleBack}
            activeStep={activeStep}
            length={steps.length}
          />
        );
      case 1:
        return (
          <PersonalDetails
            gender={gender}
            about={about}
            occupation={occupation}
            handleChange={handlePersonalChange}
            handleNext={handleNext}
            handleBack={handleBack}
            activeStep={activeStep}
            length={steps.length}
          />
        );
      case 2:
        return (
          <ContactDetails
            address={address}
            mobile={mobile}
            handleChange={handleContactChange}
            handleNext={handleNext}
            handleBack={handleBack}
            activeStep={activeStep}
            length={steps.length}
          />
        );
      case 3:
        return (
          <Confirmation
            firstName={firstName}
            lastName={lastName}
            email={email}
            gender={gender}
            about={about}
            occupation={occupation}
            address={address}
            mobile={mobile}
            handleSubmit={handleFormSubmit}
            handleNext={handleNext}
            handleBack={handleBack}
            activeStep={activeStep}
            length={steps.length}
          />
        );
      default:
        return (
          <div>
            <Typography color="primary" variant="h5" align="center">
              Form submitted successfully!
            </Typography>
          </div>
        );
    }
  }

  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <div className={classes.root}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>
            <div>
              {/* <Typography className={classes.instructions}> */}
              {getStepContent(activeStep)}
              {/* </Typography> */}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Steps;
