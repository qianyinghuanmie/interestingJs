let arr = [2, 4, 6, 7, 8, 9];
let val = 5;


function find(array, val) {
  if (val < Math.min(...array)) {
    return 0;
  };
  if (val >= Math.max(...array)) {
    return array.length - 1;
  };
  var idx = 0,
    i = 0,
    j = array.length;
  for (; i < j; i++) {
    if (array[i] > val) {
      idx = i;
      break;
    };
  };
  return idx;
}
console.log(find(arr, val));
