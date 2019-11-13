/* Requirements:
-Plane.js

*/
class Powerup{
    constructor(name, bullets){
        this.name = name;
        this.bullets = bullets;
    }

    funct(player){
        this.shoot(player);
    }
    shoot(player){
        this.bullets.map(element => { 
            objects.push(new Bullet("Bullet", player.x+element[0], player.y+element[1], player.team, element[2], player.ctx));
        });
    }

}
