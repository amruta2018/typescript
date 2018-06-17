var Apple = /** @class */ (function () {
    function Apple() {
    }
    Apple.prototype.eat = function () {
        console.log(this.color);
        console.log(this.height);
        console.log(this.wigth);
    };
    return Apple;
}());
var appleobj = new Apple();
appleobj.color = 'Red';
appleobj.height = 10;
appleobj.wigth = 20;
appleobj.eat();
