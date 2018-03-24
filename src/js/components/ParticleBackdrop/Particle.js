class Particle {
    constructor (x, y, radius, minVelocity, maxVelocity, color, canvas) {
        this.origin = {x: x, y: y};
        this.currentPoint = {...this.origin};
        this.lastPoint = {...this.origin};
        this.radius = radius;
        this.color = color;
        this.canvasContext = canvas;
        this.distanceFromCenter = this.calculateDistanceFromCenter(0, (this.canvasContext.canvas.width - this.radius) / 2);
        this.radians = this.startingRadianFromDegrees(Math.random() * 360);
        this.velocity = Math.random() * (maxVelocity - minVelocity) + minVelocity;
    }

    startingRadianFromDegrees = degrees => (degrees / 180) * Math.PI;
    calculateDistanceFromCenter = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    
    update = () => {
        this.lastPoint.x = this.currentPoint.x;
        this.lastPoint.y = this.currentPoint.y;
        this.radians += this.velocity;
        this.currentPoint.x = this.origin.x + Math.cos(this.radians) * this.distanceFromCenter;
        this.currentPoint.y = this.origin.y + Math.sin(this.radians) * this.distanceFromCenter;
        this.draw();
    };
    
    draw = () => {
        this.canvasContext.beginPath();
        this.canvasContext.arc(this.lastPoint.x, this.lastPoint.y, this.radius, 0, Math.PI * 2, false);
        this.canvasContext.fillStyle = this.color;
        this.canvasContext.fill();
        this.canvasContext.closePath();

        // this.canvasContext.beginPath();
        // this.canvasContext.strokeStyle = this.color;
        // this.canvasContext.lineWidth = this.radius;
        // this.canvasContext.moveTo(this.lastPoint.x, this.lastPoint.y);
        // this.canvasContext.lineTo(this.currentPoint.x, this.currentPoint.y);
        // this.canvasContext.stroke();
        // this.canvasContext.closePath();
    };
}

export default Particle;
