import { isListLikeIterable } from "@angular/core/src/change_detection/change_detection_util";

class Like {
    public count:number;
    public status:boolean

   public constructor (count:number,status:boolean)
    {
        this.count = 9;
        this.status = false
    }

    public Like()
    {
        if(this.status == false)
        {
            return this.status = true
        }
        else
        {
            return this.status =false
        }

    }
}

let likeClass = new LikeClass();
likeClass.count=9;
likeClass.status=false;

