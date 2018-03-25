import React from "react";
import { hot } from "react-hot-loader";

class MadLib extends React.Component {
    constructor(props) {
        super(props);

        this.leftComponent = this.props.LeftComponent;
        this.modifier = this.props.Modifier;
        this.libs = this.props.Libs;

        this.state = {
            currentLib: this.getLib(),
            lastNounMap: new Map()
        };
    }

    getLib = () => {
        var lib = null;
        while(!lib || (this.state && lib.action === this.state.currentLib.action)){
            lib = this.libs[Math.floor(Math.random() * this.libs.length)];
        }
        var noun = this.state ? this.state.lastNounMap.get(lib.action) : null;
        while(!noun || (this.state && noun === this.state.lastNounMap.get(lib.action))){
            noun = lib.nouns[Math.floor(Math.random() * lib.nouns.length)];
        }
        var newLib = { action: lib.action, noun: noun };
        return newLib;
    }
    updateLib = () => {
        const nextLib = this.getLib();
        const lastNounMap = this.state.lastNounMap;
        lastNounMap.set(nextLib.action, nextLib.noun);
        this.setState({currentLib: nextLib, lastNounMap: lastNounMap});
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    componentDidMount() {
        this.interval = setInterval(this.updateLib, 3000);
    }

    render() {
        return (
            <div className={this.props.CssClass} style={this.props.Style}>
                <span className="rift-demi mad-lib-static animated">{this.leftComponent} </span>
                <span className="rift-demi mad-lib">{this.state.currentLib.action}</span>
                <span className="rift-demi mad-lib-static animated"> {this.modifier} </span>
                <span className="rift-demi mad-lib">{this.state.currentLib.noun}</span>
                <span className="rift-demi mad-lib-static animated">.</span>
            </div>
        );
    }
}

export default hot(module)(MadLib);