import React from "react"; // eslint-disable-line no-unused-vars
import { Route } from "react-router-dom";
import { hot } from "react-hot-loader";

import Landing from "../Landing";

const app = () => {
    return (
        <Route path="/" exact render={() => <Landing />} />
    );
};

export default hot(module)(app);