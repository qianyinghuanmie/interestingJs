var x = function*(y) {
  yield y * y;
};
console.log(x(2).next());
console.log(x(2).next());
