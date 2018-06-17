class Apple
{
    public color:string;
    public height:number;
    public wigth:number;

    constructor()
    {

    }

    eat()
    {
        console.log(this.color);
        console.log(this.height);
        console.log(this.wigth);
    }

}

let appleobj = new Apple();
appleobj.color ='Red';
appleobj.height =10;
appleobj.wigth =20;
appleobj.eat();