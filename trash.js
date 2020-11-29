class Trash {
    constructor(x,y){
        
        this.x=x;
        this.y=y;
        this.trashWidth = 200;
        this.trashHeight = 100;
        this.trashThickness = 20;
        this.trashAngle = 0;
        var options = {
            isStatic:true
        }
        this.trashBottomBody = Bodies.rectangle(this.x, this.y, this.trashWidth, this.trashThickness, options);
        World.add(world, this.trashBottomBody);
        var options1 = {
            isStatic:true
        }
        this.trashLeftBody = Bodies.rectangle(this.x - this.trashWidth/2, this.y - this.trashHeight/2, this.trashThickness, options1);
        Matter.Body.setAngle(this.trashLeftBody, this.angle);
        World.add(world, this.trashLeftBody);
        var options2 = {
            isStatic:true
        }
        this.trashRightBody = Bodies.rectangle(this.x + this.trashWidth/2, this.y - this.trashHeight/2, this.trashThickness, options2);
        Matter.Body.setAngle(this.trashRightBody, -1 * this.angle);
        World.add(world, this.trashRightBody);
    }





    display(){
        
        var posBottom = this.trashBottomBody.position;
        var posLeft = this.trashLeftBody.position;
        var posRight = this.trashRightBody.position;
        
        push()
    translate(posBottom.x, posBottom.y);
    rectMode(CENTER);
    angleMode(RADIANS);
    strokeWeight(3);
    fill("white");
    rect(0,0,this.trashWidth, this.trashThickness);

    pop()
        push()
    translate(posLeft.x, posLeft.y);
    rotate(this.angle);
    rectMode(CENTER);
    angleMode(RADIANS);
    strokeWeight(3);
    fill("white");
    rect(0,0,this.trashWidth, this.trashHeight);

    pop()
        push()
    translate(posRight.x, posRight.y);
    rotate(-1 * this.angle);
    rectMode(CENTER);
    angleMode(RADIANS);
    strokeWeight(3);
    fill("white");
    rect(0,0,this.trashWidth, this.trashHeight);

    pop()
    }
}
