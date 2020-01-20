
    class Cuboid{
        constructor(length,breadth,height){
        this.length=length;
        this.breadth=breadth;
        this.height=height;
    }
    volume (){
        return this.length *this.breadth *this.length;
    
    }
    surfaceArea(){
        return (2*this.length*this.breadth) + (2*this.length*this.height) + (2*this.height*this.breadth)
    }
    }
    let cu=new Cuboid(2,2,2)
    console.log(cu.volume());
    console.log(cu.surfaceArea());
    
    class Cube extends Cuboid{
        constructor(side){
        super(side,side,side)
    }
    }
    let cu1=new Cube(10)
    console.log(cu1.volume());
    console.log(cu1.surfaceArea());