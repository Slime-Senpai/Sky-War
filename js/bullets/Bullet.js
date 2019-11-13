/* Requirements:
-Color.js
-AngledObject.js
-Team.js

*/

class Bullet extends AngledObject{
    constructor(name, x, y, team, ang, ctx) {
        super(name, x, y, 20, 10, team.color, 30, ang, ctx);
        this.team = team;
    }
    move() {
        super.move();
    }
}