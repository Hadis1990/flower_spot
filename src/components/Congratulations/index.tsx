import { Link, useNavigate } from "react-router-dom";

import "./index.scss";

export default () => {
  const navigate = useNavigate();

  return (
    <div id="congratulations">
      <div className="close">
        <Link to="/">&#10006;</Link>
      </div>
      <h4>Congratulations! You have successfully signed up for FlowrSpot!</h4>
      <button onClick={() => navigate("/login")}>OK</button>
    </div>
  );
};
