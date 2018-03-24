import React from "react"; // eslint-disable-line no-unused-vars
import ReactDom from "react-dom";

import App from "./views/App";

function render(Component){
    ReactDom.render(
        <Component />,
        document.getElementById("app-root")
    );
}

render(App);