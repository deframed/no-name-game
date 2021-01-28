// template for element star
class Star {
    constructor(positionX, positionY, someRadius, someColor) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.starRadius = someRadius;
        this.color = someColor;
    }

    drawStar(star) {
        ctx.beginPath()
        ctx.arc(this.positionX, this.positionY, this.starRadius, 0, 2 * Math.PI)
        ctx.strokeStyle = "whitesmoke"
        ctx.stroke()
        ctx.fillStyle = "whitesmoke"
        ctx.fill()
        ctx.closePath()
    }

    moveDown() {

    }
    
}
