import { useState, useEffect } from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { Link, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import * as Yup from "yup";

import { registerUser } from "../../../state/users/actions";
import { registerCleanUp } from "../../../state/users/reducer";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import { User } from "../../../types";

import "react-datepicker/dist/react-datepicker.css";
import "./index.scss";

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
};

const RegisterSchema = Yup.object().shape({
  first_name: Yup.string().max(50, "Too Long!").required("Required!"),
  last_name: Yup.string().max(50, "Too Long!").required("Required!"),
  email: Yup.string().email("Invalid Email").required("Required!"),
  password: Yup.string().min(6, "Too Short for Password").required("Required!"),
});

export default () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { error, loading, authToken } = useAppSelector(
    (state) => state.usersReducer.register
  );

  const [birthDay, setbirthDay] = useState<Date>();

  useEffect(() => {
    authToken && navigate("/congratulations");
  }, [authToken]);

  useEffect(() => {
    return () => {
      dispatch(registerCleanUp());
    };
  }, []);

  return (
    <div id="register-form-container">
      <div className="close">
        <Link to="/">&#10006;</Link>
      </div>
      <h1>Create an Account</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={RegisterSchema}
        onSubmit={(values: User, { setSubmitting }: FormikHelpers<User>) => {
          dispatch(registerUser({ ...values, date_of_birth: birthDay }));
        }}
      >
        {({ errors, touched }) => (
          <Form id="register-form">
            <div className="input-fields-container">
              <label htmlFor="first_name">First Name</label>
              <Field
                id="first_name"
                name="first_name"
                className="input-fields"
              />
              {errors.first_name && touched.first_name ? (
                <div>{errors.first_name}</div>
              ) : null}
            </div>

            <div className="input-fields-container">
              <label htmlFor="last_name">Last Name</label>
              <Field id="last_name" name="last_name" className="input-fields" />
              {errors.last_name && touched.last_name ? (
                <div>{errors.last_name}</div>
              ) : null}
            </div>

            <div className="input-fields-container">
              <label htmlFor="date_of_birth">Date of Birth</label>
              <DatePicker
                id="date_of_birth"
                name="date_of_birth"
                className="input-fields"
                selected={birthDay}
                onChange={(date: Date) => setbirthDay(date)}
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

            <button
              type="submit"
              className="submit-button white-font"
              disabled={loading}
            >
              Create Account
            </button>
          </Form>
        )}
      </Formik>
      {error && <div className="error">{error}</div>}
    </div>
  );
};
