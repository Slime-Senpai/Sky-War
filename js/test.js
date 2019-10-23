window.onload = init;
let canvas;

function init() {
  
    canvas = document.querySelector("#myCanvas");

    //context graphique
    ctx = canvas.getContext("2d");
    let obj1 = new GraphicalObject("obj1", 100, 100, 50, 100, new Color(0, 255, 255), 0, ctx);
    obj1.draw();
    //requestAnimationFrame(anime60fps);
}