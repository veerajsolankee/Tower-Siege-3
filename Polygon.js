class Polygon {
    constructor(x, y, r) {
        var options = {
            isStatic: false,
            restitution: 1,
            density: 0.2
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        World.add(world, this.body);
        this.image = loadImage("hexa.png");
        // this.image.resize(1000,1000);  
    }
    display() {
        var pos = this.body.position;
        // var angle = this.angle;
        push();
        ellipseMode(RADIUS);
        translate(pos.x, pos.y);
        // fill(red); 
        // stroke(color);
        strokeWeight(4);
        // ellipse(0,0,this.r,this.r);
        imageMode(CENTER);
        image(this.image, 0,0,this.r, this.r)
        pop();
    }
}