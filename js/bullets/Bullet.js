/* Requirements:
-Color.js
-GraphicalObject.js
-Team.js

*/

class Bullet extends AngledObject{
    constructor(name, x, y, team, ang, ctx) {
        super(name, x, y, 20, 10, team.color, 5, ang, ctx);
        this.team = team;
    }
    move() {
        super.move();

    }
}