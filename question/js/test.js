function subArr(_arr, _length) {
     let newArr = [],len = _arr.length;
     for (let i = 0; i < len; i++){
         let res = []
         for (let j = i; j < i + _length; j++) {
             res.push(_arr[j])
         }
         if (res.length === _length) {
             newArr.push(res)
         }
     }
     return newArr;
 }

 // 获得二维数组中和最大的数组
 function getMostArr(arr) {
     let most = 0, sum = 0;
     let tem = [];
     arr.forEach((item,i) => {
         let _sum = 0;
         if(item!=0){
           item.forEach(sub => _sum+=sub)
           if (_sum > sum) {
               sum = _sum,
               most = i
           }else if(_sum == sum){
             tem = i
           }
         }
     })
     // console.log( tem[0]);

     return { arr: tem>0&&tem>most?[arr[most],arr[tem]]: arr[most], sum: sum }
 }

 function findSubarrMaxSum(_arr) {
     let source = []
     for (let i = 1; i <= _arr.length; i++) {
         let arr = subArr(_arr, i);
         source = source.concat(arr)
     }
     let most = getMostArr(source);
     return [typeof most.arr=="undefined"||most.sum==0?[]:most.arr,most.sum]
 }
let   arr =  [ -89,
  -13,
  -95,
  -84,
  -74,
  -87,
  -31,
  1,
  39,
  59,
  -39,
  -8,
  -71,
  0,
  28,
  39,
  57,
  82,
  99,
  -46,
  -60,
  -92,
  -12,
  -17,
  -6,
  92,
  -2,
  4,
  -49,
  62,
  61,
  14,
  -1,
  91,
  70,
  -12,
  100,
  -40 ]
console.log(findSubarrMaxSum(arr));
