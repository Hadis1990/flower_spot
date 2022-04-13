import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAppSelector } from "../../state/hooks";

import "./index.scss";

export default () => {
  const { authToken: registerAuthToken } = useAppSelector(
    (state) => state.usersReducer.register
  );
  const { authToken: loginAuthToken } = useAppSelector(
    (state) => state.usersReducer.login
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (!registerAuthToken && !loginAuthToken) navigate("/");
  }, []);

  if (!registerAuthToken && !loginAuthToken) return null;

  console.log(registerAuthToken);

  return (
    <div id="congratulations">
      <div className="close">
        <Link to="/">&#10006;</Link>
      </div>
      <h4>Congratulations! You have successfully signed up for FlowrSpot!</h4>
      {registerAuthToken && !loginAuthToken && (
        <button onClick={() => navigate("/login")}>OK</button>
      )}

      {loginAuthToken && (
        <div className="login-success-btns">
          <button onClick={() => navigate("/")}>OK</button>
          <button onClick={() => navigate("/user_profile")}>Profile</button>
        </div>
      )}
    </div>
  );
};
