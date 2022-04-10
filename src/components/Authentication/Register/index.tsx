import React, { useState } from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import * as Yup from "yup";

import "react-datepicker/dist/react-datepicker.css";
import "./index.scss";

type FormValues = {
  firstName: string;
  lastName: string;
  birthday: string;
  email: string;
  password: string;
};

const initialValues = {
  firstName: "",
  lastName: "",
  birthday: "",
  email: "",
  password: "",
};

const RegisterSchema = Yup.object().shape({
  firstName: Yup.string().max(50, "Too Long!").required("Required!"),
  lastName: Yup.string().max(50, "Too Long!").required("Required!"),
  email: Yup.string().email("Invalid Email").required("Required!"),
  password: Yup.string().min(3, "Too Short for Password").required("Required!"),
});

export default () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div id="register-form-container">
      <div className="close">
        <Link to="/">&#10006;</Link>
      </div>
      <h1>Create an Account</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={RegisterSchema}
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
          <Form id="register-form">
            <div className="input-fields-container">
              <label htmlFor="firstName">First Name</label>
              <Field id="firstName" name="firstName" className="input-fields" />
              {errors.firstName && touched.firstName ? (
                <div>{errors.firstName}</div>
              ) : null}
            </div>

            <div className="input-fields-container">
              <label htmlFor="lastName">Last Name</label>
              <Field id="lastName" name="lastName" className="input-fields" />
              {errors.lastName && touched.lastName ? (
                <div>{errors.lastName}</div>
              ) : null}
            </div>

            <div className="input-fields-container">
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <DatePicker
                id="dateOfBirth"
                name="dateOfBirth"
                className="input-fields"
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
              />
            </div>

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
              Create Account
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
