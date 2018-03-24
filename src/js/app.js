import React from "react"; // eslint-disable-line no-unused-vars
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./views/App";

function render(Component){
    ReactDom.render(
        <BrowserRouter><Component /></BrowserRouter>,
        document.getElementById("app-root")
    );
}

render(App);