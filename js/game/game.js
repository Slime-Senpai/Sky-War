/* Requirements:
FORCED TO ALL
*/

window.onload = init;

let enemyTeam = new Team("Enemy", new Color(255, 0, 0));

function reset() {
    objects = [];
    score = 0;
    spawningCooldown = 0;
    firstGame = 0;
    init();
}

function init() {
    canvas = document.querySelector("#myCanvas");
    //context graphique
    ctx = canvas.getContext("2d");
    paused = false;

    //image init
    if(firstGame == 1){
        images["bullet1"] = new Image();
        images["bullet1"].src = "assets/BulletBig.png";

        images["player1"] = new Image();
        images["player1"].src = "assets/PlayerBig.png";

        images["mvEnemy"] = new Image();
        images["mvEnemy"].src = "assets/MovingEnemy.png";

        images["level1"] = new Image();
        images["level1"].src = "assets/Level1.png";
    }
    let player1 = new Player("Player", (canvas.width-64)/2, canvas.height-84, new Team("Player", new Color(0, 255, 255)), 64, 64, new Color(0, 255, 255), 
            new Powerup("Powerup_Basic", [[-20, -32, 30, -Math.PI/2, 2, images["bullet1"]], [20, -32, 30, -Math.PI/2, 2, images["bullet1"]]], 5), 30, images["player1"], ctx);
    objects.push(player1);

    
    
    document.addEventListener("keydown", function(e){
        let key = e.which;

        switch(key){
            case 90:
            case 87:
            case 38:
                player1.front = 1;
            break;
            case 83:
            case 40:
                player1.back = 1;
            break;
            case 81:
            case 65:
            case 37:
                player1.left = 1;
            break;
            case 68:
            case 39:
                player1.right = 1;
            break;
            case 32:
                player1.space = 1;
            break;
        }
    });

    document.addEventListener("keyup", function(e){
        let key = e.which;
        switch(key){
            case 90:
            case 87:
            case 38:
                player1.front = 0;
            break;
            case 83:
            case 40:
                player1.back = 0;
            break;
            case 81:
            case 65:
            case 37:
                player1.left = 0;
            break;
            case 68:
            case 39:
                player1.right = 0;
            break;
            case 32:
                player1.space = 0;
            break;
            case 82:
                reset();
            break;
            case 80:
                paused = !paused;
            break;
        }
    });

    ctx.save();
    ctx.font = "60px Arial";
    ctx.fillStyle = "rgb(200, 0, 0)";
    ctx.textAlign = "center";
    ctx.fillText("LOADING", canvas.width/2, canvas.height/2);
    ctx.restore();

    if(firstGame == 1){
        images["level1"].onload = function() {
            let level1 = new Level("Level1", new Color(200, 200, 200), -2, images["level1"], ctx);
            objects.unshift(level1);
            requestAnimationFrame(anime);
            
        };
    }else{
        let level1 = new Level("Level1", new Color(200, 200, 200), -2, images["level1"], ctx);
        objects.unshift(level1);
    }
}


function anime() {
    if(!paused && objects[1] instanceof Player){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        objects.forEach(o => {
            o.funct();
        });
        spawningCooldown--;
        if(spawningCooldown<=0){
            spawningCooldown=60;
            let power = new Powerup("Powerup_Enemy_Basic", [[0, 32, 10, Math.PI/2, 25, images["bullet1"]]], 40 + Math.random()*80);
            objects.push(new BasicEnemy("Enemy", Math.random()*canvas.width, -100, enemyTeam, 64, 64, enemyTeam.color, 4, power, 10, images["mvEnemy"], ctx));
            console.log("Spawned");
        }

        ctx.save();
        ctx.font = "30px Arial";
        ctx.fillStyle = "rgb(255, 0, 0)";
        ctx.fillText("Score: "+score, 10, 30);
        ctx.restore();
    }else if(paused){
        ctx.save();
        ctx.font = "60px Arial";
        ctx.fillStyle = "rgb(200, 0, 0)";
        ctx.textAlign = "center";
        ctx.fillText("PAUSED", canvas.width/2, canvas.height/2);
        ctx.restore();
    }else{
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.font = "60px Arial";
        ctx.fillStyle = "rgb(200, 0, 0)";
        ctx.textAlign = "center";
        ctx.fillText("GAME OVER", canvas.width/2, canvas.height/2);
        ctx.fillStyle = "rgb(30, 200, 200)";
        ctx.fillText("Score: "+score, canvas.width/2, canvas.height/2+60);
        ctx.font = "30px Arial";
        ctx.fillText("Press 'R' to restart", canvas.width/2, canvas.height/2+100);
        ctx.restore();
    }
    requestAnimationFrame(anime);
}