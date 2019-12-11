/* Requirements:
-GraphicalObject.js
-Powerup.js


*/
class Plane extends GraphicalObject {
    constructor(name, x, y, team, width, height, color, dx, dy, ang, basePower, hp, image, ctx) {
        super(name, x, y, width, height, color, dx, dy, ang, image, ctx);
        this.team = team;
        this.power = basePower;
        this.hp = hp;
    }

    shoot(){
        this.power.funct(this);
    }
}