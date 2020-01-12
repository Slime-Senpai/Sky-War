/* Requirements:
-Color.js
-AngledObject.js
-Team.js

*/

class Bullet extends AngledObject{
    constructor(name, x, y, team, speed, ang, damage, image, ctx) {
        super(name, x, y, 20, 5, team.color, speed, ang, image, ctx);
        this.team = team;
        this.damage = damage;
    }

    funct() {
        super.funct();
        this.collide();
    }
    move() {
        super.move();
        this.x -= (objects[0].moved ? objects[0].dx : 0);
    }

    collide() {
        let abscos = Math.abs(Math.cos(this.ang));
        let abssin = Math.abs(Math.sin(this.ang));
        objects.some(t => {
            if(t != this && !(t instanceof Bullet) && !(t instanceof Level)){
                    let x, y = false;

                    // A REFAIRE
                    if(this.x +abscos*(this.width/2)+abssin*(this.height/2) < t.x+(t.width/2) && t.x-(t.width/2) < this.x +abscos*(this.width/2)+abssin*(this.height/2)){
                        x = true;
                    }
                    if(this.x -abscos*(this.width/2)-abssin*(this.height/2) < t.x+(t.width/2) && t.x-(t.width/2) < this.x -abscos*(this.width/2)-abssin*(this.height/2)){
                        x = true;
                    }
                    if(this.y +abssin*(this.width/2)+abscos*(this.height/2) < t.y+(t.height/2) && t.y-(t.height/2) < this.y +abssin*(this.width/2)+abscos*(this.height/2)){
                        y = true;
                    }
                    if(this.y -abssin*(this.width/2)-abscos*(this.height/2) < t.y+(t.height/2) && t.y-(t.height/2) < this.y -abssin*(this.width/2)-abscos*(this.height/2)) {
                        y = true;
                    }
                    if(x && y && t.team != this.team){
                        this.speed = 0;
                        this.die();
                        t.hp -= this.damage;
                        if(t.hp<=0){
                            t.die();
                            if(!(t instanceof Player))
                                score++;
                        }
                        return true;
                    }
            }
        });

        if(this.x-this.width > canvas.width || this.y-this.height > canvas.height || this.x+this.width < 0 || this.y+this.height < 0)
            this.die();
    }
}