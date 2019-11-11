/* Requirements:
-Plane.js

*/
class Player extends Plane{
    constructor(name, x, y, team, width, height, color, ctx) {
        super(name, x, y, team, width, height, color, 0, 0, ctx);
        this.maxSpeed = 5;
        this.acc = this.maxSpeed;
        this.front = 0;
        this.back = 0;
        this.left = 0;
        this.right = 0;
        this.space = false;
    }

    changeSpeed() {
        let cx = false;
        let cy = false;

        if((this.front||this.back)){
            this.dy = Math.min(Math.max(-this.maxSpeed, this.dy+(this.back-this.front)*(this.acc)), this.maxSpeed);
            cy = true;
        }

        if((this.left||this.right)){
            this.dx = Math.min(Math.max(-this.maxSpeed, this.dx+(this.right-this.left)*(this.acc)), this.maxSpeed);
            cx = true;
        }

        if(this.dx != 0 && !cx){
            this.dx = 0;
        }

        if(this.dy != 0 && !cy){
            this.dy = 0;
        }
    }

    move() {
        this.changeSpeed();
        if(this.space){
            this.shoot();
        }
        super.move();
    }


}
