import React, { Fragment } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "@material-ui/core";
import * as Yup from "yup";

import styles from "./Form.module.css";

const ContactDetails = ({
  address,
  mobile,
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
          address: address,
          mobile: mobile
        }}
        validationSchema={Yup.object({
          address: Yup.string().required("Required"),
          mobile: Yup.string()
            .min(10, "Enter a valid mobile number")
            .max(10, "Enter a valid mobile number")
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
              name="address"
              as="textarea"
              placeholder="Address"
              className={styles.input}
            />
            <div className={styles.error}>
              <ErrorMessage name="address" className={styles.error} />
            </div>
          </div>
          <div className={styles.formGroup}>
            <Field
              name="mobile"
              type="text"
              placeholder="10-digit Mobile Number"
              className={styles.input}
            />
            <div className={styles.error}>
              <ErrorMessage name="mobile" />
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

export default ContactDetails;
