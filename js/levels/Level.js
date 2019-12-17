/* Requirements:
-GraphicalObject

*/
class Level extends GraphicalObject {
    constructor(name, color, dy, image, spawnList, ctx) {
        super(name, 100, image.height-canvas.height, canvas.width, canvas.height, color, 0, dy, 0, image, ctx);
        this.moved = false;
        this.spawnList = spawnList;
        this.image = image;
    }

    funct() {
        this.changeSpeed();
        this.worldCollision();
        this.draw();
        if(this.spawnList.length > 0){
            this.spawner();
        }
    }

    spawner() {
        if(this.spawnList[0] <= this.y){
            for(let i=0; i<this.spawnList[1].length; i++){
                switch(this.spawnList[1][i]["name"]){
                    case "BasicEnemy":
                        objects.push(new BasicEnemy(this.spawnList[1][i]["name"], this.spawnList[1][i]["x"], this.spawnList[1][i]["y"], enemyTeam, 64, 64, enemyTeam.color, this.spawnList[1][i]["dx"], this.spawnList[1][i]["dy"], this.spawnList[1][i]["power"], this.spawnList[1][i]["hp"], images["mvEnemy"], ctx));
                    break;
                }
            }
        }
    }
    
    changeSpeed() {
        if((objects[1].left||objects[1].right)){
            this.dx = Math.min(Math.max(-objects[1].maxSpeed/2, this.dx+(objects[1].right-objects[1].left)*(objects[1].acc)), objects[1].maxSpeed/2);
        }else if(this.dx != 0){
            this.dx = 0;
        }
    }

    draw() {
        this.ctx.save();
        //this.ctx.fillStyle = this.color.getColor();
        //this.ctx.fillRect(0, 0, this.width, this.height);
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height, 0, 0, this.width, this.height);
        this.ctx.restore();
    }

    worldCollision() {
        let oldx = this.x;
        if(oldx+this.dx > 200 || oldx+this.dx < 0){
            this.dx = this.x-oldx;
        }
        this.move();
        this.x = Math.max(Math.min(this.x, 200), 0);
        if(oldx != this.x){
            this.moved = true;
        }else
            this.moved = false;

    }
}