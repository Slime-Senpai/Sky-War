/* Requirements:
-Color.js

*/
class Plane extends GraphicalObject {
    constructor(name, x, y, team, width, height, color, dx, dy, ctx) {
        super(name, x, y, width, height, color, dx, dy, ctx);
        this.team = team;
    }
    shoot(){
        objects.push(new Bullet("Bullet", this.x, this.y, this.team, 0, this.ctx));
    }
}