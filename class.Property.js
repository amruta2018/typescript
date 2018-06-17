var Orange = /** @class */ (function () {
    function Orange() {
    }
    Object.defineProperty(Orange.prototype, "Color", {
        get: function () {
            return this.color;
        },
        set: function (colors) {
            this.color = colors;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Orange.prototype, "Height", {
        get: function () {
            return this.height;
        },
        set: function (hights) {
            this.height = hights;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Orange.prototype, "Weight", {
        set: function (weights) {
            this.wigth = weights;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Orange.prototype, "Wight", {
        get: function () {
            return this.wigth;
        },
        enumerable: true,
        configurable: true
    });
    Orange.prototype.eat = function () {
        // console.log(this.color);
        // console.log(this.height);
        // console.log(this.wigth);
        //Acessing this get throught the method
        console.log(this.color);
        console.log(this.Height);
        console.log(this.Wight);
        console.log();
    };
    return Orange;
}());
var OrangeObj = new Orange();
OrangeObj.Color = 'Red';
OrangeObj.Height = 10;
OrangeObj.Weight = 20;
console.log(OrangeObj.Color);
console.log(OrangeObj.Height);
console.log(OrangeObj.Wight);
OrangeObj.eat();
