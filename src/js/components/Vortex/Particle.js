class Particle {
    constructor (x, y, radius, color, canvas) {
        this.origin = {x: x, y: y};
        this.currentPoint = {...this.origin};
        this.lastPoint = {...this.origin};
        this.radius = radius;
        this.color = color;
        this.canvasContext = canvas;
        this.distanceFromCenter = this.calculateDistanceFromCenter(this.canvasContext.canvas.width / 2 - this.radius * 4, (this.canvasContext.canvas.width - this.radius) / 2);
        this.radians = Math.random() * Math.PI * 2;
        this.velocity = Math.random() * (0.01 - 0.03) + 0.03;
    }
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
        this.canvasContext.strokeStyle = this.color;
        this.canvasContext.lineWidth = this.radius;
        this.canvasContext.moveTo(this.lastPoint.x, this.lastPoint.y);
        this.canvasContext.lineTo(this.currentPoint.x, this.currentPoint.y);
        this.canvasContext.stroke();
        this.canvasContext.closePath();
    };
}

export default Particle;
