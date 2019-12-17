/* Requirements:
-Plane.js
-Bullet.js


*/
class BasicEnemy extends Plane {
    constructor(name, x, y, team, width, height, color, dx, dy, basePower, hp, image, ctx) {
        super(name, x, y, team, width, height, color, dx, dy, Math.PI, basePower, hp, image, ctx);
    }

    funct(){
        super.funct();
        this.shoot();
    }

    move() {
        super.move();
        this.x -= (objects[0].moved ? objects[0].dx : 0);
    }
}