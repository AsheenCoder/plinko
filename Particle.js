class Particle{
	constructor(x,y,r)
	{
	var options = {

        isStatic: false

	}
		this.body = Bodies.circle(x,y,r,options);
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
		this.r=r

	}
	display(){
		fill(this.color)
		ellipse(this.body.position.x,this.body.position.y,this.r,this.r)
	}
	
}


   