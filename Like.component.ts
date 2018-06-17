class LikeComponent
{
    constructor(private count?:number,private Isselected?:boolean)
    {
    }

    onclick(count:number,Isselected:boolean)
    {
        // if(this.Isselected)
        // {
        //     this.count+=1; 
        //     this.Isselected = false
        //     console.log(this.count);
        //     console.log(this.Isselected);
        // }
        // else
        // {
        //     this.count-=1; 
        //     this.Isselected = false
        //     console.log(this.count);
        //     console.log(this.Isselected);
        // }
        count+= Isselected?-1:1;
        Isselected =!Isselected;
        console.log(count);
        console.log(Isselected);
        }
}
let likeComponent = new LikeComponent();
likeComponent.onclick(9,true);
