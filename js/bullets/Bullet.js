/* Requirements:
-Color.js
-GraphicalObject.js
-Team.js

*/

class Bullet extends GraphicalObject{
    constructor(x, y, team, ang, ctx) {
        super("Bullet", x, y, 20, 10, team.color, 5, ang, ctx);
        this.team = team;
    }
}