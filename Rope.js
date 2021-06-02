class Rope {
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 400
        }

        this.rope = Constraint.create(options)
        World.add(world,this.rope)
    }

    display(){
        var pointA = this.rope.bodyA.position
        var pointB = this.rope.pointB
        stroke("blue")
        strokeWeight(3)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}