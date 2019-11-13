/* Requirements:
-Color.js
-GraphicalObject.js

*/
class AngledObject extends GraphicalObject {
    constructor(name, x, y, width, height, color, speed, ang, image, ctx) {
        let dx = Math.cos(ang)*speed;
        let dy = Math.sin(ang)*speed;
        super(name, x, y, width, height, color, dx, dy, image, ctx);
        this.ang = ang;
    }

    draw() {
        this.ctx.save();
        this.ctx.translate(this.x, this.y);
        this.ctx.rotate(this.ang);
        this.ctx.translate(-this.width/2, -this.height/2);
        //this.ctx.fillStyle = this.color.getColor();
        //this.ctx.fillRect(0, 0, this.width, this.height);
        this.ctx.drawImage(this.image, 0, 0, this.image.width, this.image.height, 0, 0, this.width, this.height);
        this.ctx.restore();
    }
}