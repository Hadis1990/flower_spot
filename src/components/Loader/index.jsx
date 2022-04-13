import "./index.scss";

import { ModalHOC } from "../";

export default () => (
  <ModalHOC
    component={
      <div id="loader-container">
        <div className="loader"></div>
      </div>
    }
  />
);
