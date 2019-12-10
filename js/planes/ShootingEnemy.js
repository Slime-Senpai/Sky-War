/* Requirements:
-Plane.js
-Bullet.js


*/
class FallingEnemy extends Plane {
    constructor(name, x, y, team, width, height, color, dy, basePower, hp, image, ctx) {
        super(name, x, y, team, width, height, color, 0, dy, Math.PI, basePower, hp, image, ctx);
    }

    move() {
        this.x += this.dx-(objects[0].moved ? objects[0].dx : 0);
        this.y += this.dy;
    }
}