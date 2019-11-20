/* Requirements:
-GraphicalObject.js
-Bullet.js


*/
class Plane extends GraphicalObject {
    constructor(name, x, y, team, width, height, color, dx, dy, ang, bullAng, hp, image, ctx) {
        super(name, x, y, width, height, color, dx, dy, ang, image, ctx);
        this.team = team;
        this.bullAng = bullAng;
        this.hp = hp;
    }
    shoot(){
        objects.push(new Bullet("Bullet", this.x, this.y, this.team, this.bullAng, 1, this.ctx));
    }
}