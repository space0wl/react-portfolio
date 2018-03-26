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
            <div className={this.props.CssClass} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                {this.props.children}
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", width: "100%" }}>
                    <Vortex CanvasDiameter={400} CanvasColor="rgba(38, 72, 91, 0.1)" MaxParticleCount={100} ParticleSize={2} NoTrails={true}>
                        <div style={{ backgroundColor: { backgroundColor }, boxShadow: "2px 2px 5px rgba(0,0,0,0.2)", border: "10px solid white", borderRadius: 380, width: 380, height: 380, position: "relative", top: 390, left: 10, overflow: "hidden" }}>
                            <img src="https://s3-us-west-2.amazonaws.com/mbcom-assets/images/VsCodeSnippetReact.gif" />
                        </div>
                    </Vortex>
                    <Vortex CanvasDiameter={400} CanvasColor="rgba(38, 72, 91, 0.1)" MaxParticleCount={100} ParticleSize={2} NoTrails={true}>
                        <div style={{ backgroundColor: { backgroundColor }, boxShadow: "2px 2px 5px rgba(0,0,0,0.2)", border: "10px solid white", borderRadius: 380, width: 380, height: 380, position: "relative", top: 390, left: 10, overflow: "hidden" }}>
                            <img src="" />
                        </div>
                    </Vortex>
                    <Vortex CanvasDiameter={400} CanvasColor="rgba(38, 72, 91, 0.1)" MaxParticleCount={100} ParticleSize={2} NoTrails={true}>
                        <div style={{ backgroundColor: { backgroundColor }, boxShadow: "2px 2px 5px rgba(0,0,0,0.2)", border: "10px solid white", borderRadius: 380, width: 380, height: 380, position: "relative", top: 390, left: 10, overflow: "hidden" }}>
                            <img src="" />
                        </div>
                    </Vortex>
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", width: "100%", fontSize: "2rem" }}>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <span>ReactJS</span>
                        <span>Redux</span>
                        <span>.NET Core</span>
                        <span>WebPack</span>
                        <span>TerraForm</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <span>C#</span>
                        <span>TypeScript</span>
                        <span>JavaScript</span>
                        <span>Sass</span>
                        <span>Swift</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <span>Photoshop</span>
                        <span>Illustrator</span>
                        <span>Visual Studio</span>
                        <span>Unity</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default hot(module)(Skills);