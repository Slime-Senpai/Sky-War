/* Requirements:
-GraphicalObject.js
-Bullet.js


*/
class Plane extends GraphicalObject {
    constructor(name, x, y, team, width, height, color, dx, dy, bullAng, ctx) {
        super(name, x, y, width, height, color, dx, dy, ctx);
        this.team = team;
        this.bullAng = bullAng;
    }
    shoot(){
        objects.push(new Bullet("Bullet", this.x, this.y, this.team, this.bullAng, this.ctx));
    }
}