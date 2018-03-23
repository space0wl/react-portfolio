class Particle {
    constructor (x, y, radius, color, canvas) {
        this.canvasX = x;
        this.canvasY = y;
        this.x = x;
        this.y = y;
        this.lastPoint = {x: x, y: y};
        this.radius = radius;
        this.color = color;
        this.canvas = canvas;
        this.distance = this.distanceFromCenter(this.canvas.canvas.width / 2 - this.radius * 4, (this.canvas.canvas.width - this.radius) / 2);
        this.radians = Math.random() * Math.PI * 2;
        this.velocity = (Math.random() * (0.01 - 0.03) + 0.03);
    }
    distanceFromCenter = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    update = () => {
        this.lastPoint.x = this.x;
        this.lastPoint.y = this.y;
        this.radians += this.velocity;
        this.x = this.canvasX + Math.cos(this.radians) * this.distance;
        this.y = this.canvasY + Math.sin(this.radians) * this.distance;
        this.draw();
    };
    draw = () => {
        this.canvas.beginPath();
        //this.canvas.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        //this.canvas.fillStyle = this.color;
        //this.canvas.fill();
        this.canvas.strokeStyle = this.color;
        this.canvas.lineWidth = this.radius;
        this.canvas.moveTo(this.lastPoint.x, this.lastPoint.y);
        this.canvas.lineTo(this.x, this.y);
        this.canvas.stroke();
        this.canvas.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.canvas.fill();
        //this.canvas.closePath();
    };
}

export default Particle;
