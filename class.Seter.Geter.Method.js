var Apples = /** @class */ (function () {
    function Apples() {
    }
    Apples.prototype.setColor = function (colors) {
        this.color = colors;
    };
    Apples.prototype.setHeight = function (hights) {
        this.height = hights;
    };
    Apples.prototype.setWeight = function (weights) {
        this.wigth = weights;
    };
    Apples.prototype.getColor = function () {
        return this.color;
    };
    Apples.prototype.getHeight = function () {
        return this.height;
    };
    Apples.prototype.getWight = function () {
        return this.wigth;
    };
    Apples.prototype.eat = function () {
        // console.log(this.color);
        // console.log(this.height);
        // console.log(this.wigth);
        //Acessing this get throught the method
        console.log(this.getColor());
        console.log(this.getHeight());
        console.log(this.getWight());
        console.log();
    };
    return Apples;
}());
var applesobj = new Apples();
applesobj.setColor('Red');
applesobj.setHeight(10);
applesobj.setWeight(20);
console.log(applesobj.getColor());
console.log(applesobj.getHeight());
console.log(applesobj.getWight());
applesobj.eat();
