function Car() {
  this.make = 'Lamborghini';
  return { make: 'Maserati' };
}

const Bike = () => { // error
  this.a = 1;
  return { a: 2 }
}

const myCar = new Car();
console.log(myCar.make);

const myBike = new Bike();
console.log(myBike.a);
