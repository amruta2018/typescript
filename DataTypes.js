var a;
a = 20;
//a='Amruta';
//Strpngly Type that why it show error
var b;
b = 'Amrita';
//b=3;
//Array :-
// 1.here type is array of number
var c = [1, 2, 3];
var Name = ['Amruta', 'Raut'];
//here type is an object
var d;
//here type is any,Bydefault is any. It can accet anything like var keyword in Javascript.
var e;
e = [1, 2, 3, 4];
e = '';
e = 2;
e = 'abc';
//here type is constant
var f = 10;
//f =20;//It will gives compile time error.
//here boolean
var g;
g = true;
g = false;
//g=2;//It will gives compile time error.
//Enum
//type is enum. to declare multiple constant.
var color;
(function (color) {
    color[color["purple"] = 0] = "purple";
    color[color["red"] = 1] = "red";
    color[color["green"] = 2] = "green";
    color[color["bule"] = 3] = "bule";
})(color || (color = {}));
//How to access the enum
var Redcolor = color.red;
console.log(Redcolor);
//type is object
