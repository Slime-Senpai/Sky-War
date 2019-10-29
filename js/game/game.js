/* Requirements:
-Color.js
-GraphicalObject.js
-Team.js
-Bullet.js

*/

window.onload = init;
let canvas;
let objects = [];
let tm = new Team("Hello", new Color(0, 255, 255));
let cooldown = 0;
function init() {
    canvas = document.querySelector("#myCanvas");

    //context graphique
    ctx = canvas.getContext("2d");
    objects.push(new GraphicalObject("obj1", 200, 200, 100, 50, new Color(0, 255, 255), 1, 0, ctx));
    requestAnimationFrame(anime);
}


function anime() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    cooldown--;
    objects.map(o => {
        o.move();
        if(o.name != "Bullet"){
            if(cooldown <= 0){
                objects.push(new Bullet(o.x, o.y, tm, o.ang, o.ctx));
                cooldown = 60;
            }
            o.ang+=0.01;
        }
        o.draw();
    });
    requestAnimationFrame(anime);
}