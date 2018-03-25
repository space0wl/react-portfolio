import React from "react";
import { hot } from "react-hot-loader";

import Vortex from "../../components/Vortex";

class Skills extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        const backgroundColor = "rgba(38, 72, 91, 0.1)";
        return (
            <div className={this.props.CssClass} style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                {this.props.children}
                <Vortex CanvasDiameter={400} CanvasColor="rgba(38, 72, 91, 0.1)" MaxParticleCount={100} ParticleSize={2} NoTrails={true}>
                    <div style={{ backgroundColor: {backgroundColor}, borderRadius: 380, width: 380, height: 380, position: "relative", top: 390, left: 10, overflow: "hidden" }}>
                        <img src="" />
                    </div>
                </Vortex>
                <Vortex CanvasDiameter={400} CanvasColor="rgba(38, 72, 91, 0.1)" MaxParticleCount={100} ParticleSize={2} NoTrails={true}>
                    <div style={{ backgroundColor: {backgroundColor}, borderRadius: 380, width: 380, height: 380, position: "relative", top: 390, left: 10, overflow: "hidden" }}>
                        <img src="" />
                    </div>
                </Vortex>
                <Vortex CanvasDiameter={400} CanvasColor="rgba(38, 72, 91, 0.1)" MaxParticleCount={100} ParticleSize={2} NoTrails={true}>
                    <div style={{ backgroundColor: {backgroundColor}, borderRadius: 380, width: 380, height: 380, position: "relative", top: 390, left: 10, overflow: "hidden" }}>
                        <img src="" />
                    </div>
                </Vortex>
            </div>
        );
    }
}

export default hot(module)(Skills);