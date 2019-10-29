/* Requirements:
-Color.js

*/

class Team {
    constructor(name, color){
        this.name = name;
        this.color = color;
    }

    getColor(){
        return "rgb("+this.color.r+","+this.color.g+","+this.color.b+")";
    }
    getName(){
        return this.name;
    }
}