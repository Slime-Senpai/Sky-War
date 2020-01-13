/* Requirements:
-Plane.js
-Bullet.js


*/
class StayingEnemy extends Plane {
    constructor(name, x, y, ctx) {
        let epower = new Powerup("Powerup_Enemy_Basic", [[0, 32, 10, Math.PI/2, 25, images["bullet1"]]], 40 + Math.random()*80);
        super(name, x, y, enemyTeam, 64, 64, enemyTeam.color, 0, 4, Math.PI, epower, 30, images["mvEnemy"], ctx);
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
        if(this.dy>0){
            this.dy = Math.max(this.dy-Math.random()*0.05, 0);
        }
    }
}