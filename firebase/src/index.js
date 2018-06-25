import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppTwo from "./AppTwo";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<AppTwo />, document.getElementById("root"));
registerServiceWorker();
