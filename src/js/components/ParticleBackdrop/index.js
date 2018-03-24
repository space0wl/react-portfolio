import React from "react";
import { hot } from "react-hot-loader";

import Particle from "./Particle";

class ParticleBackdrop extends React.Component {
    constructor(props) {
        super(props);

        this.particleColors = this.props.ParticleColors || ["#1C5475", "#4684A8", "#648FA8", "#66C0F4"];
        this.particleSize = this.props.MaxParticleSize;

        this.state = {
            CanvasHeight: window.innerHeight,
            CanvasWidth: window.innerWidth
        };
    }

    randomInRange = (min, max) => (Math.random() * (min - max) + max);

    createParticles = count => {
        this.particles = [];
        for (let i = 0; i < count; i++) {
            this.particles.push(new Particle(
                (Math.random() * this.particleSize) * 1,
                1,
                this.particleColors[Math.floor(Math.random() * this.particleColors.length)],
                this.canvasContext,
                this.randomInRange(0.001, 0.01)
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

        this.canvas.width = this.state.CanvasWidth;
        this.canvas.height = this.state.CanvasHeight;

        this.createParticles(this.props.MaxParticleCount || 1);
        this.updateParticles();
    }

    render() {
        return (
            <div className={this.props.CssClass} style={this.props.Style}>
                {this.props.children}
                <canvas ref="canvas" id={`pb-canvas-${this.props.key}`}>
                </canvas>
            </div>
        );
    }
}

export default hot(module)(ParticleBackdrop);