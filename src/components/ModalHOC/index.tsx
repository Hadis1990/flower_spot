import React from "react";

import "./index.scss";

type Props = {
  children: React.ReactNode;
};

export default ({ children }: Props) => <div id="modal">{children}</div>;
