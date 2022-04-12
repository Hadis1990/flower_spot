import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import profileImage from "../../assets/images/profile-holderprofile.png";

import usersApi from "../../services/api/users";
import { logout } from "../../state/users/reducer";
import { useAppDispatch, useAppSelector } from "../../state/hooks";

import "./index.scss";

export default () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { authToken } = useAppSelector((state) => state.usersReducer.login);

  const [userData, setUserData] = useState(null);

  // useEffect(() => {
  //   const helperFunc = async () => {
  //     const response = await usersApi.getUserDate();
  //     setUserData(response.data.user);
  //   };

  //   try {
  //     helperFunc();
  //   } catch (error) {}
  // }, []);

  useEffect(() => {
    if (!authToken) navigate("/login");
  }, [authToken]);

  return (
    <div id="user-profile">
      <div className="close">
        <Link to="/">&#10006;</Link>
      </div>
      <div className="section-1">
        <div>
          <img src={profileImage} />
        </div>
        <div>
          <div>John Doe</div>
          <div>17 sightings</div>
        </div>
      </div>
      <div className="section-2">
        <div>
          <label>First Name</label>
          <div>John</div>
        </div>
        <div>
          <label>Last Name</label>
          <div>Doe</div>
        </div>
        <div>
          <label>Date of Birth</label>
          <div>19.01.1997</div>
        </div>
        <div>
          <label>Email Address</label>
          <div>test@test.com</div>
        </div>
      </div>
      <div className="logut-btn-container">
        <button onClick={() => dispatch(logout())}>Logout</button>
      </div>
    </div>
  );
};
