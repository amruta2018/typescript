class Apples
{
    private color:string;
    private height:number;
    private wigth:number;

    constructor()
    {

    }

    setColor(colors:string)
    {
        this.color =colors;
    }    
    setHeight(hights:number)
    {
        this.height =hights;
    }  
    setWeight(weights:number)
    {
        this.wigth = weights;
    }
    getColor()
    {
        return this.color;
    }
    getHeight()
    {
        return this.height;
    }
    getWight()
    {
        return this.wigth;
    }



    eat()
    {
        // console.log(this.color);
        // console.log(this.height);
        // console.log(this.wigth);
//Acessing this get throught the method
        console.log(this.getColor());
        console.log(this.getHeight());
        console.log(this.getWight());

        console.log()
    }

}

let applesobj = new Apples();
applesobj.setColor('Red');
applesobj.setHeight(10);
applesobj.setWeight(20);
console.log(applesobj.getColor());
console.log(applesobj.getHeight());
console.log(applesobj.getWight());



applesobj.eat();
