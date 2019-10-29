/* Requirements:
-Color.js

*/
class GraphicalObject {
    constructor(name, x, y, width, height, color, speed, ang, ctx) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.speed = speed;
        this.ang = ang;
        this.ctx = ctx;
    }

    draw() {
        this.ctx.save();
        this.ctx.translate(this.x, this.y);
        this.ctx.rotate(this.ang);
        this.ctx.translate(-this.width/2, -this.height/2);
        this.ctx.fillStyle = this.color.getColor();
        this.ctx.fillRect(0, 0, this.width, this.height);
        this.ctx.restore();
    }

    move() {
        let dx = Math.cos(this.ang)*this.speed;
        let dy = Math.sin(this.ang)*this.speed;

        this.x += dx;
        this.y += dy;
    }
}