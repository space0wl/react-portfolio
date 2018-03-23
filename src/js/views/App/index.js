import React from "react"; // eslint-disable-line no-unused-vars
import { hot } from "react-hot-loader";

import Vortex from "../../components/Vortex";

// No need for lifecycle events at the moment for the App container, so it may be a stateless function. State will be managed by Redux.
const app = () => {
    return (
        <div>
            <Vortex CanvasDiameter={400} MaxParticleCount={40} ParticleSize={5} ParticleColor="blue" />
            <Vortex CanvasDiameter={400} MaxParticleCount={20} ParticleSize={3} ParticleColor="blue" />
            <Vortex CanvasDiameter={400} MaxParticleCount={10} ParticleSize={7} ParticleColor="blue" />
        </div>
    );
};

export default hot(module)(app);