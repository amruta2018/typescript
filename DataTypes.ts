let a:number;
a=20;
//a='Amruta';

//Strpngly Type that why it show error
let b:string;
b='Amrita';
//b=3;

//Array :-
// 1.here type is array of number
let c:number[]=[1,2,3];
let Name:string[]=['Amruta','Raut'];

//here type is an object
let d :[{
    name:'Amruta',
    add:'pune'
}];

//here type is any,Bydefault is any. It can accet anything like var keyword in Javascript.
let e;
e=[1,2,3,4];
e='';
e=2;
e='abc';

//here type is constant
const f =10;
//f =20;//It will gives compile time error.
//here boolean

let g:boolean;
g=true;
//g=false;
//g=2;//It will gives compile time error.

//Enum
//type is enum. to declare multiple constant.
enum color{purple=0,red=1,green=2,bule=3}
//How to access the enum
let Redcolor = color.red;
console.log(Redcolor);





//type is object


