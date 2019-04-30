
var quickSort = function(arr) {

　　if (arr.length <= 1) { return arr; }//数组为1的时候返回原数组

    var pivotIndex = Math.floor(arr.length / 2) ;

    var pivot = arr.splice(pivotIndex, 1)[0]; //基准数字

    var left = [];

    var right = [];

    for(var i =0;i<arr.length;i++){

      if(arr[i]<pivot){

        left.push(arr[i])

      }else{

        right.push(arr[i])
      }
    }

    // return quickSort(left).concat([pivot], quickSort(right));
    return [...quickSort(left),...[pivot],...quickSort(right)]; //递归

};

let arr = [33,55,11,43,52,55,56,97,54,23];
console.log(quickSort(arr));
