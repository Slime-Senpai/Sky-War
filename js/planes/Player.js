/* Requirements:
-Plane.js

*/
class Player extends Plane{
    constructor(name, x, y, team, width, height, color, basePower, hp, image, ctx) {
        super(name, x, y, team, width, height, color, 0, 0, -Math.PI/2, hp, image, ctx);
        this.maxSpeed = 10;
        this.power = basePower;
        this.acc = this.maxSpeed;
        this.front = 0;
        this.back = 0;
        this.left = 0;
        this.right = 0;
        this.space = 0;
        this.shootCooldown = 0;
    }


    funct() {
        this.changeSpeed();
        super.funct();
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.x, this.y, 2, 2);
        this.worldColision();
        if(this.space){
            this.shootCooldown--;
            if(this.shootCooldown<=0){
                this.shootCooldown = 5;
                this.power.funct(this);
            }
        }
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

    worldColision() {

        if(this.x-32 < 0 || this.x+32 > canvas.width){
            this.x = Math.max(Math.min(this.x, canvas.width-32), 32);
        }
        if(this.y-32 < 0 || this.y+32 > canvas.height){
            this.y = Math.max(Math.min(this.y, canvas.height-32), 32);
        }
    }


}
