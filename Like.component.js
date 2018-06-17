var LikeComponent = /** @class */ (function () {
    function LikeComponent(count, Isselected) {
        this.count = count;
        this.Isselected = Isselected;
    }
    LikeComponent.prototype.onclick = function (count, Isselected) {
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
        count += Isselected ? -1 : 1;
        Isselected = !Isselected;
        console.log(count);
        console.log(Isselected);
    };
    return LikeComponent;
}());
var likeComponent = new LikeComponent();
likeComponent.onclick(9, true);
