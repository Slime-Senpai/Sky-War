/* Requirements:
-Plane.js

*/
class Player extends Plane{
    constructor(name, ctx) {
        
        let tcolor = new Color(0, 255, 255);
        let tpowerup = new Powerup("Powerup_Player_Basic", [[-20, -32, 30, -Math.PI/2, 2, images["bullet1"]], [20, -32, 30, -Math.PI/2, 2, images["bullet1"]]], 5);
        let tteam = new Team("Player", tcolor);

        super(name, (canvas.width-64)/2, canvas.height-84, tteam, 64, 64, tcolor, 0, 0, 0, tpowerup, 30, images["player1"], ctx);
        this.maxSpeed = 10;
        this.acc = this.maxSpeed;
        this.front = 0;
        this.back = 0;
        this.left = 0;
        this.right = 0;
        this.space = 0;
    }

    funct() {
        this.changeSpeed();
        super.funct();
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.x, this.y, 2, 2);
        this.worldCollision();
        this.collide();
        if(this.space){
            this.shoot();
        }
    }

    changeSpeed() {
        if((this.front||this.back)){
            this.dy = Math.min(Math.max(-this.maxSpeed, this.dy+(this.back-this.front)*(this.acc)), this.maxSpeed);
        }else if(this.dy != 0){
            this.dy = 0;
        }

        if((this.left||this.right)){
            this.dx = Math.min(Math.max(-this.maxSpeed, this.dx+(this.right-this.left)*(this.acc)), this.maxSpeed);
        }else if(this.dx != 0){
            this.dx = 0;
        }
    }

    worldCollision() {

        if(this.x-32 < 0 || this.x+32 > canvas.width){
            this.x = Math.max(Math.min(this.x, canvas.width-32), 32);
        }
        if(this.y-32 < 0 || this.y+32 > canvas.height){
            this.y = Math.max(Math.min(this.y, canvas.height-32), 32);
        }
    }

    collide() {
        objects.some(t => {
                    if(t != this && !(t instanceof Bullet) && !(t instanceof Level)){
                        if (this.x + (this.width/2) < t.x - (t.width/2) || this.x - (this.width/2) > t.x + (t.width/2) || this.y - (this.height/2) > t.y + (t.height/2) || this.y + (this.height/2) < t.y - (t.height/2)) {
                            
                        }else{
                            this.hp--;
                            if(this.hp<=0){
                                this.die();
                            }
                        }
                    }
        });
    }

}
