class Particle {
    constructor(radius, maxVelocity, color, canvas, alphaRate = 0.01) {
        this.radius = radius;
        this.color = color;
        this.canvasContext = canvas;
        this.origin = { x: this.canvasContext.canvas.width * Math.random(), y: this.canvasContext.canvas.height * Math.random() };
        this.currentPoint = { ...this.origin };
        this.velocity = { x: this.buildVelocity(maxVelocity), y: this.buildVelocity(maxVelocity) };
        this.currentAlpha = 1;
        this.alphaRate = alphaRate;
        this.fading = true;
    }

    buildVelocity = (max) => {
        return max * Math.random() - max / 2;
    }

    update = () => {
        this.currentPoint.x += this.velocity.x;
        this.currentPoint.y += this.velocity.y;

        if (this.currentPoint.x < 0 || this.currentPoint.x > this.canvasContext.canvas.width + this.radius * 2) {
            this.velocity.x = -this.velocity.x;
        }
        if (this.currentPoint.y < 0 || this.currentPoint.y > this.canvasContext.canvas.height + this.radius * 2) {
            this.velocity.y = -this.velocity.y;
        }
        
        if(this.currentAlpha <= 1 && this.fading === true){
            this.currentAlpha -= this.alphaRate;
            if(this.currentAlpha <= 0){
                this.currentAlpha = 0;
                this.fading = false;
            }
        } else {
            this.currentAlpha += this.alphaRate;
            if(this.currentAlpha >= 1){
                this.currentAlpha = 1;
                this.fading = true;
            }
        }

        this.draw();
    };

    draw = () => {
        this.canvasContext.fillStyle = this.color;
        this.canvasContext.globalAlpha = this.currentAlpha;

        //this.canvasContext.fillRect(this.currentPoint.x, this.currentPoint.y, this.radius, this.radius);

        this.canvasContext.beginPath();
        this.canvasContext.arc(this.currentPoint.x, this.currentPoint.y, this.radius, 0, Math.PI * 2, true);
        this.canvasContext.closePath();
        this.canvasContext.fill();
    };
}

export default Particle;
