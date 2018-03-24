import React from "react";
import { hot } from "react-hot-loader";

import Particle from "./Particle";

class ParticleBackdrop extends React.Component {
    constructor(props) {
        super(props);

        this.particleColors = this.props.ParticleColors || ["#1C5475", "#4684A8", "#26485B", "#648FA8", "#66C0F4"];
        this.particleSize = this.props.MaxParticleSize;

        this.state = {
            CanvasHeight: window.innerHeight,
            CanvasWidth: window.innerWidth
        };
    }
    handleResize = () => {
        this.setState({
            CanvasHeight: window.innerHeight,
            CanvasWidth: window.innerWidth
        });
        this.canvas.width = this.state.CanvasWidth;
        this.canvas.height = this.state.CanvasHeight;
        this.createParticles(this.props.MaxParticleCount || 1);
        this.updateParticles();
    }

    createParticles = count => {
        this.particles = [];
        for (let i = 0; i < count; i++) {
            this.particles.push(new Particle(
                this.canvas.width / 2,
                this.canvas.height / 2,
                (Math.random() * this.particleSize) * 1,
                0.0001,
                0.001,
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
        window.addEventListener("resize", this.handleResize);

        this.canvas = this.refs.canvas;
        this.canvasContext = this.canvas.getContext("2d");

        this.canvas.width = this.state.CanvasWidth;
        this.canvas.height = this.state.CanvasHeight;

        this.createParticles(this.props.MaxParticleCount || 1);
        this.updateParticles();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }
    render() {
        return (
            <div>
                {this.props.children}
                <canvas ref="canvas" id={`pb-canvas-${this.props.key}`}>
                </canvas>
            </div>
        );
    }
}

export default hot(module)(ParticleBackdrop);