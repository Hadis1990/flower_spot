import React, { useState } from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import DatePicker from "react-datepicker";
import * as Yup from "yup";

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
      <h1>Create an Account</h1>;
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
        <Form id="register-form">
          <label htmlFor="firstName">First Name</label>
          <Field
            id="firstName"
            name="firstName"
            placeholder="John"
            className="input-fields"
          />

          <label htmlFor="lastName">Last Name</label>
          <Field
            id="lastName"
            name="lastName"
            placeholder="Doe"
            className="input-fields"
          />

          <DatePicker
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
          />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="john@acme.com"
            type="email"
            className="input-fields"
          />

          <label htmlFor="password">password</label>
          <Field
            id="password"
            name="password"
            placeholder="john@acme.com"
            type="password"
            className="input-fields"
          />

          <button type="submit" className="submit-button">
            Create Account
          </button>
        </Form>
      </Formik>
    </div>
  );
};
