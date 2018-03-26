import React from "react";
import { hot } from "react-hot-loader";

class GroundControlComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className={this.props.CssClass}>
                {this.props.children}
            </div>
        );
    }
}

export default hot(module)(GroundControlComponent);