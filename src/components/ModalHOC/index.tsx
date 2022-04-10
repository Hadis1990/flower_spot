import React from "react";

import "./index.scss";

type Props = { component: React.ReactNode };

export default ({ component }: Props) => <div id="modal">{component}</div>;
