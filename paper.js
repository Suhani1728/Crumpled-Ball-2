class Paper{

    constructor(){

        var options={
            isStatic : false,
            restitution : 0.3,
            friction: 0.5,
            density: 1.2
         }
this.body=Bodies.circle(100,500,20,options);

this.image=loadImage("sprites/paper.png")

        World.add(world,this.body);
    }
    display(){

        var pos=this.body.position;
       
    imageMode(CENTER);
    fill("yellow");
    image(this.image,pos.x,pos.y,40,40)
}
}