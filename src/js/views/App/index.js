import React from "react"; // eslint-disable-line no-unused-vars
import { hot } from "react-hot-loader";

import Vortex from "../../components/Vortex";

// No need for lifecycle events at the moment for the App container, so it may be a stateless function. State will be managed by Redux.
const app = () => {
    return (
        <div className="center">
            <Vortex CanvasDiameter={400} CanvasColor="rgba(0,0,0,0.1)" MaxParticleCount={50} ParticleSize={40}>
                <div className="centerContent" style={{ backgroundColor: "grey", borderRadius: 380, width: 380, height: 380, position: "relative", top: 390, left: 10, overflow:"hidden" }}>
                <img src="https://www.somepets.com/wp-content/uploads/2013/01/What-a-Funny-Little-Kitten-1.jpg" />
                </div>
            </Vortex>
            <Vortex CanvasDiameter={400} CanvasColor="rgba(0,0,0,0.1)" MaxParticleCount={50} ParticleSize={2}>
                <div className="centerContent" style={{ backgroundColor: "grey", borderRadius: 380, width: 380, height: 380, position: "relative", top: 390, left: 10, overflow:"hidden" }}>
                <img src="https://media.giphy.com/media/zhJR6HbK4fthC/giphy.gif" />
                </div>
            </Vortex>
            <Vortex CanvasDiameter={400} CanvasColor="rgba(0,0,0,0.1)" MaxParticleCount={50} ParticleSize={2}>
                <div className="centerContent" style={{ backgroundColor: "grey", borderRadius: 380, width: 380, height: 380, position: "relative", top: 390, left: 10, overflow:"hidden" }}>
                <img src="https://media.giphy.com/media/zhJR6HbK4fthC/giphy.gif" />
                </div>
            </Vortex>
        </div>
    );
};

export default hot(module)(app);