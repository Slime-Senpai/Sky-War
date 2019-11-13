/* Requirements:
-Color.js
-AngledObject.js
-Team.js

*/

class Bullet extends AngledObject{
    constructor(name, x, y, team, ang, damage, image, ctx) {
        super(name, x, y, 20, 10, team.color, 30, ang, image, ctx);
        this.team = team;
        this.damage = damage;
    }

    funct() {
        super.funct();
        this.collide();
    }
    move() {
        super.move();
    }

    collide() {
        let abscos = Math.abs(Math.cos(this.ang));
        let abssin = Math.abs(Math.sin(this.ang));
        objects.some(t => {
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
                    if(x && y){
                        this.speed = 0;
                        this.die();
                        t.hp -= this.damage;
                        if(t.hp<=0){
                            t.die();
                            score++;
                        }
                        return true;
                    }
        });

        if(this.x-this.width > canvas.width || this.y-this.height > canvas.height || this.x+this.width < 0 || this.y-this.height < 0)
            this.die();
    }
}