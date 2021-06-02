class Ball{
    constructor(x,y,r){
        var options = {
            density: 1
        }

        this.r = r
        this.body = Bodies.circle(x,y,r,options)
        World.add(world,this.body)
    }

    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        ellipse(0,0,this.r*2,this.r*2)
        pop()
    }
}