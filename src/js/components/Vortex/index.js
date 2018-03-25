import React from "react";
import { hot } from "react-hot-loader";

import Particle from "./Particle";

class Vortex extends React.Component {
    constructor(props) {
        super(props);

        this.particles = [];
        this.particleColors = this.props.ParticleColors || ["#1C5475", "#4684A8", "#26485B", "#648FA8", "#66C0F4"];
        this.particleSize = this.props.ParticleSize;
        this.particleColor = this.props.ParticleColor;
        this.canvasDiameter = this.props.CanvasDiameter;
    }

    createParticles = count => {
        for (let i = 0; i < count; i++) {
            this.particles.push(new Particle(
                this.canvas.width / 2,
                this.canvas.height / 2,
                (Math.random() * this.particleSize) * 1,
                0.01,
                0.03,
                this.particleColors[Math.floor(Math.random() * this.particleColors.length)],
                this.canvasContext
            ));
        }
    }

    updateParticles = () => {
        requestAnimationFrame(this.updateParticles);
        if (this.props.NoTrails === true) {
            this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
        this.canvasContext.fillStyle = this.props.CanvasColor;
        this.canvasContext.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.particles.forEach(p => {
            p.update();
        });
    }

    componentDidMount() {
        this.canvas = this.refs.canvas;
        this.canvasContext = this.canvas.getContext("2d");

        this.canvas.width = this.canvasDiameter;
        this.canvas.height = this.canvasDiameter;

        this.createParticles(this.props.MaxParticleCount || 1);
        this.updateParticles();
    }

    render() {
        return (
            <div>
                {this.props.children}
                <canvas ref="canvas" id={`vortex-canvas-${this.props.key}`} style={{ borderRadius: this.props.CanvasDiameter }}>
                </canvas>
            </div>
        );
    }
}

export default hot(module)(Vortex);