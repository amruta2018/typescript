class Orange
{
    private color:string;
    private height:number;
    private wigth:number;

    constructor()
    {

    }

    set Color(colors:string)
    {
        this.color =colors;
    }    
    set Height(hights:number)
    {
        this.height =hights;
    }  
    set Weight(weights:number)
    {
        this.wigth = weights;
    }
    get Color()
    {
        return this.color;
    }
    get Height()
    {
        return this.height;
    }
    get Wight()
    {
        return this.wigth;
    }



    eat()
    {
        // console.log(this.color);
        // console.log(this.height);
        // console.log(this.wigth);
//Acessing this get throught the method
        console.log(this.color);
        console.log(this.Height);
        console.log(this.Wight);

        console.log()
    }

}

let OrangeObj = new Orange();
OrangeObj.Color='Red';
OrangeObj.Height=10;
OrangeObj.Weight=20;
console.log(OrangeObj.Color);
console.log(OrangeObj.Height);
console.log(OrangeObj.Wight);



OrangeObj.eat();
