numArray=new Array(1,2,3);
console.log(numArray)
var datees=new Date();
console.log(datees)
console.log("dsds")
// throw new Error("error is thrown")
var a=10
console.log(a)

function add(m,n){
    return m+n
}

console.log(add(2,3))

// class is being created which can be used to create custom objects

function Car(make,model,year){
    this.make=make;
    this.model=model;
    this.year=year;
    this.getName=function(){
        return this.make + '' + this.model + '' + this.year
    }
}

var honda= new Car("suv","v3",2010);
console.log(honda.getName());
console.log(honda.make)

// creating prototypes
Car.prototype.color
honda.color="blue"
console.log(honda)

    