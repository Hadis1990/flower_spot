import React, { useState } from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import DatePicker from "react-datepicker";
import * as Yup from "yup";

import "react-datepicker/dist/react-datepicker.css";
import "./index.scss";

type FormValues = {
  email: string;
  password: string;
};

const initialValues = {
  email: "",
  password: "",
};

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Required!"),
  password: Yup.string().required("Required!"),
});

export default () => {
  return (
    <div id="login-form-container">
      <h1>Welcome Back</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={(
          values: FormValues,
          { setSubmitting }: FormikHelpers<FormValues>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        {({ errors, touched }) => (
          <Form id="login-form">
            <div className="input-fields-container">
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                type="email"
                className="input-fields"
              />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </div>

            <div className="input-fields-container">
              <label htmlFor="password">password</label>
              <Field
                id="password"
                name="password"
                type="password"
                className="input-fields"
              />
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
            </div>

            <button type="submit" className="submit-button white-font">
              Login to your Account
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
