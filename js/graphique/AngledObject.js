/* Requirements:
-Color.js
-GraphicalObject.js

*/
class AngledObject extends GraphicalObject {
    constructor(name, x, y, width, height, color, speed, ang, image, ctx) {
        let dx = Math.cos(ang)*speed;
        let dy = Math.sin(ang)*speed;
        super(name, x, y, width, height, color, dx, dy, ang, image, ctx);
    }
}