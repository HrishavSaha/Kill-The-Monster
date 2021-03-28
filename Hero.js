class Hero{
    constructor(x,y,width,height){
        var options ={
            isStatic: false,
            'density':0.05
        }
        
        this.image = loadImage("hero.png");
        //this.image.scale = 0.1;
        this.body =  Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        Matter.Body.setMass(this.body,this.body.mass*5);
        this.width = width;
        this.height = height;
    }
    display(){
        push();
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width, this.height);
        pop();
        //rectMode(CENTER);
        //fill("white");
        //rect(pos.x,pos.y,this.width,this.height);
    }
}
