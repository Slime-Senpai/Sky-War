/* Requirements:
-Bullet.js

*/
class Powerup{
    constructor(name, bullets, cooldown){
        this.name = name;
        this.bullets = bullets;
        this.cooldown = cooldown;
        this.shootCooldown = 0;
    }

    funct(plane){
        this.shootCooldown--;
        if(this.shootCooldown<=0){
            this.shootCooldown = this.cooldown;

            this.shoot(plane);
        }
    }
    shoot(plane){
        
        this.bullets.map(element => {
            objects.push(new Bullet("Bullet", plane.x+element[0], plane.y+element[1], plane.team, element[2], element[3], element[4], element[5], plane.ctx));
        });
    }

}
