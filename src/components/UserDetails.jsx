import React, { Fragment } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "@material-ui/core";
import * as Yup from "yup";

import styles from "./Form.module.css";

const UserDetails = ({
  firstName,
  lastName,
  email,
  activeStep,
  length,
  handleChange,
  handleNext,
  handleBack
}) => {
  return (
    <Fragment>
      <Formik
        initialValues={{
          firstName: firstName,
          lastName: lastName,
          email: email
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid Email Address")
            .required("Required")
        })}
        onSubmit={values => {
          console.log(JSON.stringify(values, null, 2));
          handleChange(values);
          handleNext();
        }}
      >
        <Form className={styles.form}>
          <div className={styles.formGroup}>
            <Field
              name="firstName"
              type="text"
              placeholder="First Name"
              className={styles.input}
            />
            <div className={styles.error}>
              <ErrorMessage name="firstName" className={styles.error} />
            </div>
          </div>
          <div className={styles.formGroup}>
            <Field
              name="lastName"
              type="text"
              placeholder="Last Name"
              className={styles.input}
            />
            <div className={styles.error}>
              <ErrorMessage name="lastName" />
            </div>
          </div>
          <div className={styles.formGroup}>
            <Field
              name="email"
              type="email"
              placeholder="Email ID"
              className={styles.input}
            />
            <div className={styles.error}>
              <ErrorMessage name="email" />
            </div>
          </div>
          <div>
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>
            <Button variant="contained" color="primary" type="submit">
              {activeStep === length - 1 ? "Submit" : "Next"}
            </Button>
          </div>
        </Form>
      </Formik>
    </Fragment>
  );
};

export default UserDetails;
