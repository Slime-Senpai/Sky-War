/* Requirements:
-Plane.js
-Bullet.js


*/
class FallingEnemy extends Plane {
    constructor(name, x, y, team, width, height, color, dy, bullAng, hp, image, ctx) {
        super(name, x, y, team, width, height, color, 0, dy, bullAng, hp, image, ctx);
    }
}