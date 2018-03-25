import React from "react"; // eslint-disable-line no-unused-vars
import { Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader";

import Landing from "../Landing";
import Skills from "../Skills";

const app = () => {
    return (
        <Switch>
            <Route path="/" exact render={() => <Landing />} />
            <Route path="/skills" exact render={() => <Skills />} />
        </Switch>
    );
};

export default hot(module)(app);