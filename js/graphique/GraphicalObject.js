/* Requirements:
-Color.js

*/
class GraphicalObject {
    constructor(name, x, y, width, height, color, dx, dy, image, ctx) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.dx = dx;
        this.dy = dy;
        //this.ang = ang;
        this.image = image;
        this.ctx = ctx;
    }

    funct() {
        this.draw();
        this.move();
    }

    draw() {
        this.ctx.save();
        this.ctx.translate(this.x, this.y);
        this.ctx.translate(-this.width/2, -this.height/2);
        //this.ctx.fillStyle = this.color.getColor();
        //this.ctx.fillRect(0, 0, this.width, this.height);
        this.ctx.drawImage(this.image, 0, 0, this.image.width, this.image.height, 0, 0, this.width, this.height);
        this.ctx.restore();
    }

    move() {
        this.x += this.dx;
        this.y += this.dy;
    }

    die(){
        objects.splice(objects.indexOf(this), 1);
    }
}