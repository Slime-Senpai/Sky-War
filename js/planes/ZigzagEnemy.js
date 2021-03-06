/* Requirements:
-Plane.js
-Bullet.js


*/
class ZigzagEnemy extends Plane {
    constructor(name, x, y, ctx) {
        let epower = new Powerup("Powerup_Enemy_Basic", [[0, 32, 10, Math.PI/2, 25, images["bullet1"]]], 40 + Math.random()*80);
        super(name, x, y, enemyTeam, 64, 64, enemyTeam.color, -2-Math.random()*6, 4, Math.PI, epower, 10, images["mvEnemy"], ctx);
    }

    funct(){
        super.funct();
        this.shoot();
    }

    move() {
        super.move();
        this.x -= (objects[0].moved ? objects[0].dx : 0);
        if(this.y>canvas.height+32){
            this.die();
        }
        if(this.x<32 || this.x > canvas.width+32){
            this.x = Math.max(Math.min(this.x, canvas.width+32), 32)
            this.dx =-this.dx;
        }
    }
}