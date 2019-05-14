function car() {
  this.say=function () {
    console.log("hello");
  }
}
car.prototype.move=function () {
  console.log("move111");
}
var car1 = new car();
var car2 = new car();
car1.move()
console.log(car.prototype);
console.log(car);
// console.log(car1);
car2.say=function () {
  console.log("no");
}
