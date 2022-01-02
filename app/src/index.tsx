import React from "react";
import ReactDOM from "react-dom";
// Routes
import Home from "./routes/Home/Home";
//CSS
import "./styles/app.scss";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
