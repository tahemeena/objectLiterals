let car = {
    name: "Maruti",
    topSpeed: 180,
    run: function() {
        console.log("car is running");
    }
}
console.log(car);
car.run();
car.name;

//constructor

function GeralCar(givenname, givenspeed) {
    this.name = givenname;
    this.topSpeed = givenspeed;
    this.run = function() {
        console.log(`${this.name} is running`)
    }
    this.analyz = function() {
        console.log(`speed is faster than ${200-this.topSpeed} by car`)
    }
}
car1 = new GeralCar("Maruti", 80);
console.log(car1);
car2 = new GeralCar("Suzuki", 10);
console.log(car2)