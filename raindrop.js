class raindrop {
    constructor(x, y, width, height) {
      var options = {
        'velocityY':5.0
        
        
    }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("drop.png");
      World.add(world, this.body);
    }

    fall(){
      this.body.velocityY = random(10,50);
    }
    display(){
      imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y, this.width,this.height);
      }
  };
   