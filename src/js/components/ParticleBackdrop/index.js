import React from "react";
import { hot } from "react-hot-loader";

import Particle from "./Particle";

class ParticleBackdrop extends React.Component {
    constructor(props){
        super(props);

        this.Particles = [];
        this.ParticleSize = this.props.ParticleSize;
        this.ParticleColor = this.props.ParticleColor;
        this.CanvasDiameter = this.props.CanvasDiameter;
    }

    createParticles = count => {
        for (let i = 0; i < count; i++) {
            this.Particles.push(new Particle(
                this.Canvas.width / 2, 
                this.Canvas.height / 2, 
                (Math.random() * this.ParticleSize) * 1, 
                this.ParticleColor, 
                this.CanvasContext
            ));         
        }
    }

    updateParticles = () => {
        requestAnimationFrame(this.updateParticles);
        this.CanvasContext.fillStyle = "rgba(255,255,255,0.2";
        this.CanvasContext.fillRect(0, 0, this.Canvas.width, this.Canvas.height);
        this.Particles.forEach(p => {
            p.update();
        });
    }

    componentDidMount() {
        this.Canvas = this.refs.canvas;
        this.CanvasContext = this.Canvas.getContext("2d");

        this.Canvas.width = this.CanvasDiameter;
        this.Canvas.height = this.CanvasDiameter;

        this.createParticles(this.props.MaxParticleCount || 1);
        this.updateParticles();
    }

    render() {
        return (<canvas ref="canvas" id={`vortex-canvas-${this.props.key}`}></canvas>);
    }
}

export default hot(module)(Vortex);