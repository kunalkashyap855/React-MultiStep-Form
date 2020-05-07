import React from "react";
import { Typography, Button } from "@material-ui/core";

import styles from "./Confirmation.module.css";

const Confirmation = ({
  firstName,
  lastName,
  email,
  mobile,
  gender,
  occupation,
  about,
  address,
  handleSubmit,
  handleNext,
  handleBack,
  activeStep,
  length
}) => {
  const handleFormSubmitAndNext = () => {
    handleSubmit();
    handleNext();
  };

  return (
    <div className={styles.container}>
      <div className={styles.group}>
        <div className={styles.output}>
          <Typography color="primary" variant="h6">
            First Name
          </Typography>
          <Typography color="textPrimary" variant="body1">
            {firstName}
          </Typography>
        </div>
        <div className={styles.output}>
          <Typography color="primary" variant="h6">
            Last Name
          </Typography>
          <Typography color="textPrimary" variant="body1">
            {lastName}
          </Typography>
        </div>
      </div>
      <div className={styles.group}>
        <div className={styles.output}>
          <Typography color="primary" variant="h6">
            Email ID
          </Typography>
          <Typography color="textPrimary" variant="body1">
            {email}
          </Typography>
        </div>
        <div className={styles.output}>
          <Typography color="primary" variant="h6">
            Mobile Number
          </Typography>
          <Typography color="textPrimary" variant="body1">
            {mobile}
          </Typography>
        </div>
      </div>
      <div className={styles.group}>
        <div className={styles.output}>
          <Typography color="primary" variant="h6">
            Gender
          </Typography>
          <Typography color="textPrimary" variant="body1">
            {gender}
          </Typography>
        </div>
        <div className={styles.output}>
          <Typography color="primary" variant="h6">
            Occupation
          </Typography>
          <Typography color="textPrimary" variant="body1">
            {occupation}
          </Typography>
        </div>
      </div>
      <div className={styles.group}>
        <div className={styles.output}>
          <Typography color="primary" variant="h6">
            About
          </Typography>
          <Typography color="textPrimary" variant="body1">
            {about}
          </Typography>
        </div>
      </div>
      <div className={styles.group}>
        <div className={styles.output}>
          <Typography color="primary" variant="h6">
            Address
          </Typography>
          <Typography color="textPrimary" variant="body1">
            {address}
          </Typography>
        </div>
      </div>
      <div className={styles.group}>
        <Button disabled={activeStep === 0} onClick={handleBack}>
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleFormSubmitAndNext}
        >
          {activeStep === length - 1 ? "Submit" : "Next"}
        </Button>
      </div>
    </div>
  );
};

export default Confirmation;
