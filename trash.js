class Trash {
    constructor(x,y){
        var options = {
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.trashWidth = 200;
        this.trashHeight = 100;
        this.trashThickness = 20;
        this.trashAngle = 0;
        this.trashBottomBody = Bodies.rectangle(this.x, this.y, this.trashWidth, this.trashThickness, options);
        World.add(world, this.trashBottomBody);
        this.trashLeftBody = Bodies.rectangle(this.x - this.trashWidth/2, this.y - this.trashHeight/2, this.trashThickness, options);
        Matter.Body.setAngle(this.trashLeftBody, this.trashAngle);
        World.add(world, this.trashLeftBody);
        this.trashRightBody = Bodies.rectangle(this.x + this.trashWidth/2, this.y - this.trashHeight/2, this.trashThickness, options);
        Matter.Body.setAngle(this.trashRightBody, this.trashAngle);
        World.add(world, this.trashRightBody);
    }





    display(){
        
        var posBottom = this.bottomBody.position;
        push()
    translate(posBottom.x, posBottom.y);
    rectMode(CENTER);
    strokWeight(3);
    fill("white");
    rect(0,0,this.trashThickness, this.trashThickness);

    pop()
        var posLeft = this.leftWallBody.position;
        push()
    translate(posLeft.x, posLeft.y);
    rectMode(CENTER);
    strokWeight(3);
    fill("white");
    rect(0,0,this.trashWidth, this.trashHeight);

    pop()
        var posRight = this.rightWallBody.position;
        push()
    translate(posRight.x, posRight.y);
    rectMode(CENTER);
    strokWeight(3);
    fill("white");
    rect(0,0,this.trashWidth, this.trashHeight);

    pop()
    }
}