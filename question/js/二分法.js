// 从小到大顺序二分法

let arr = [2, 4, 6, 7, 8, 9];
let val = 5;

function find(arr, val) {
  if (val <= Math.min(...arr)) {
    return 0;
  }
  if (val >= Math.max(...arr)) {
    return arr.length - 1;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]>val) {
        return i;
    }
  }
}
console.log(find(arr, val));
