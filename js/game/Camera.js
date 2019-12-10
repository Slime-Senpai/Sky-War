/* Requirements:
-Color.js

*/

class Camera {
    constructor(name, level){
        this.name = name;
        this.level = level;
        this.x = level.x;
        this.y = level.y;
        this.toDraw = [];
    }


    getToDrawObjects(){
        this.toDraw = objects.map(o => {
            //if()
        });
        return this.toDraw;
    }

}