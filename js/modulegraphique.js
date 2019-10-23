class Color {
    constructor(r, g, b){
        this.r = r;
        this.g = g;
        this.b = b;
    }

    getColor(){
        return "rgb("+this.r+","+this.g+","+this.b+")"
    }
}

class GraphicalObject {
    constructor(name, x, y, width, height, color, ang, ctx) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.ang = ang;
        this.ctx = ctx;
    }

    draw() {
        this.ctx.save();
        this.ctx.translate(this.x, this.y);
        this.ctx.rotate(this.ang);
        this.ctx.fillStyle = this.color.getColor();
        this.ctx.fillRect(0, 0, this.width, this.height);
        this.ctx.restore();
    }
}