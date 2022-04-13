import { useEffect } from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { loginUser } from "../../../state/users/actions";
import { loginCleanUp } from "../../../state/users/reducer";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import { User } from "../../../types";

import "react-datepicker/dist/react-datepicker.css";
import "./index.scss";

const initialValues = {
  email: "",
  password: "",
};

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Required!"),
  password: Yup.string().required("Required!"),
});

export default () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { error, loading, authToken } = useAppSelector(
    (state) => state.usersReducer.login
  );

  useEffect(() => {
    authToken && navigate("/congratulations");
  }, [authToken]);

  useEffect(() => {
    return () => {
      dispatch(loginCleanUp());
    };
  }, []);

  return (
    <div id="login-form-container">
      <div className="close">
        <Link to="/">&#10006;</Link>
      </div>
      <h1>Welcome Back</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={(
          values: Pick<User, "email" | "password">,
          { setSubmitting }: FormikHelpers<Pick<User, "email" | "password">>
        ) => {
          dispatch(loginUser(values));
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
              <label htmlFor="password">Password</label>
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
              Login to your Account
            </button>
          </Form>
        )}
      </Formik>

      {error && <div className="error">{error}</div>}
    </div>
  );
};
