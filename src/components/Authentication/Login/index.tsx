import React from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import * as Yup from "yup";

import "./index.scss";

type FormValues = {
  email: string;
  password: string;
};

const initialValues = {
  email: "",
  password: "",
};

const RegisterSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Required!"),
  password: Yup.string().min(3, "Too Short for Password").required("Required!"),
});

export default () => {
  return (
    <div id="login-form-container">
      <h1>Welcome Back</h1>;
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
        <Form id="login-form">
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
            Login to your Account
          </button>
        </Form>
      </Formik>
    </div>
  );
};
