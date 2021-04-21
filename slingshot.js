class Slingshot {
    constructor(bodyX,pointY){
        var options = {
            bodyA : bodyX,
            pointB : pointY,
            stiffness : 0.04,
            length : 10
        }
      
        this.slingshot = Constraint.create(options);
        World.add(world,this.slingshot);
    }
    display(){
        var pointA,pointB;
        if (this.slingshot.bodyA != null ){
            pointA = this.slingshot.bodyA.position ;
            pointB = this.slingshot.pointB;
            strokeWeight(5);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }

    //Function for releasing the bird
    release(){
        this.slingshot.bodyA = null ;
    }
} 