class Ballon {
    constructor(x,y,r){
        var options = {
            density:1,
            frictionAir:1
        }
        this.x=x
        this.y=y
        this.r=r
        this.image=loadImage("pro-C35 images/Hot Air Ballon-02.png")
        this.body=Bodies.circle(this.x,this.y,(this.r)/2,options)
        World.add(world,this.body)
    }
}