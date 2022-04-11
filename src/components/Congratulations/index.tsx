import { useNavigate } from "react-router-dom";

import "./index.scss";

export default () => {
  const navigate = useNavigate();

  return (
    <div id="congratulations">
      <h3>Congratulations! You have successfully signed up for FlowrSpot!</h3>
      <button onClick={() => navigate("/login")}>OK</button>
    </div>
  );
};
