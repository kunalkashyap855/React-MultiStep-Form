import React, { Fragment } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "@material-ui/core";
import * as Yup from "yup";

import styles from "./Form.module.css";

const PersonalDetails = ({
  gender,
  about,
  occupation,
  activeStep,
  handleChange,
  length,
  handleNext,
  handleBack
}) => {
  return (
    <Fragment>
      <Formik
        initialValues={{
          gender: gender,
          occupation: occupation,
          about: about
        }}
        validationSchema={Yup.object({
          gender: Yup.string().required("Required"),
          occupation: Yup.string()
            .max(40, "Must be 40 characters or less")
            .required("Required"),
          about: Yup.string()
            .max(200, "Must be 200 characters or less")
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
            <Field name="gender" as="select" className={styles.input}>
              <option value="">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Others</option>
              <option value="NA">Prefer not to disclose</option>
            </Field>
            <div className={styles.error}>
              <ErrorMessage name="gender" className={styles.error} />
            </div>
          </div>
          <div className={styles.formGroup}>
            <Field
              name="about"
              as="textarea"
              placeholder="Tell us a bit about yourself"
              className={styles.input}
            />
            <div className={styles.error}>
              <ErrorMessage name="about" />
            </div>
          </div>
          <div className={styles.formGroup}>
            <Field
              name="occupation"
              type="text"
              placeholder="Occupation"
              className={styles.input}
            />
            <div className={styles.error}>
              <ErrorMessage name="occupation" />
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

export default PersonalDetails;
