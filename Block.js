class Block{
    constructor(x,y,width,height){

        var options = {
            restitution: 0.8,
            friction: 1,
            density: 0.04,
            isStatic: false
        }

        this.width = width
        this.height = height

        this.body = Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
    }

    display(){
        push()
        var pos = this.body.position
        translate(pos.x,pos.y)
        var angle = this.body.angle
        angleMode(RADIANS)
        rotate(angle)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
    }
}