import React from "react";
import ReactDOM from "react-dom";
import About from "./About";

const title = "My Minimal React Webpack Babel Setup";

ReactDOM.render(
<div><About />
</div>, document.getElementById("app"));

module.hot.accept();
