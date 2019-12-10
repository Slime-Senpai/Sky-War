/* Requirements:
-GraphicalObject

*/
class Level extends GraphicalObject {
    constructor(name, color, dy, image, ctx) {
        super(name, 100, image.height-canvas.height, canvas.width, canvas.height, color, 0, dy, 0, image, ctx);
        this.moved = false;

        this.image = image;
    }

    funct() {
        this.changeSpeed();
        this.worldCollision();
        this.draw();
    }
    
    changeSpeed() {
        if((objects[1].left||objects[1].right)){
            this.dx = Math.min(Math.max(-objects[1].maxSpeed/2, this.dx+(objects[1].right-objects[1].left)*(objects[1].acc)), objects[1].maxSpeed/2);
        }else if(this.dx != 0){
            this.dx = 0;
        }
    }

    draw() {
        this.ctx.save();
        //this.ctx.fillStyle = this.color.getColor();
        //this.ctx.fillRect(0, 0, this.width, this.height);
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height, 0, 0, this.width, this.height);
        this.ctx.restore();
    }

    worldCollision() {
        let oldx = this.x;
        if(oldx+this.dx > 200 || oldx+this.dx < 0){
            this.dx = this.x-oldx;
        }
        this.move();
        this.x = Math.max(Math.min(this.x, 200), 0);
        if(oldx != this.x){
            this.moved = true;
        }else
            this.moved = false;

    }
}