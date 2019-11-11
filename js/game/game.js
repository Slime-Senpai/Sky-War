/* Requirements:
FORCED TO ALL
*/

window.onload = init;

function init() {
    canvas = document.querySelector("#myCanvas");
    //context graphique
    ctx = canvas.getContext("2d");

    let player1 = new Player("Player", (canvas.width-64)/2, canvas.height-84, new Team("Player", new Color(0, 255, 255)), 64, 64, new Color(0, 255, 255), ctx);
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
        }
    });

    requestAnimationFrame(anime);
}


function anime() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    objects.map(o => {
        o.move();
        o.draw();
    });
    requestAnimationFrame(anime);
}