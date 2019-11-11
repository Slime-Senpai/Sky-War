/* Requirements:
-Color.js

*/
class AngledObject extends GraphicalObject {
    constructor(name, x, y, width, height, color, speed, ang, ctx) {
        let dx = Math.cos(ang)*speed;
        let dy = Math.sin(ang)*speed;
        super(name, x, y, width, height, color, dx, dy, ctx);
        this.ang = ang;
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
}