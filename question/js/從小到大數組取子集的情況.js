//通过每次与前一位的最大连续子串的信息做比较进行拼接
function getTempByPrevSeq(PrevTemp, currentValue) {
  //这里规定，0也可以进行子串拼接
  if (PrevTemp.sum >= 0) {
    // console.log(PrevTemp.sum );
    let isZero= 0;
    if(PrevTemp.sum ==0){
      isZero = PrevTemp.num +1
    }
    return {
      num: PrevTemp.num + 1,
      sum: PrevTemp.sum + currentValue,
      isZero:isZero
    };
  }
  else {
    return {
      num: 1,
      sum: currentValue
    }
  }
}

function findSubarrMaxSum(input) {
  if (input.length === 0) return [
    [], 0
  ];
  let sumarr = [];
  var temps = []; // 存储每一位与前面连续之后可得最大值的信息，以便后面的每一位进行迭代更新

  //第一位向前的最大子串就是它自己本身
  var temp = {
    num: 1,
    sum: input[0]
  };
  temps.push(temp);
  for (var i = 1, len = input.length; i < len; i++) {
    var ref = input[i];
    //从前向后迭代
    var temp = getTempByPrevSeq(temps[i - 1], ref);
    temps.push(temp);
  }

  //存储了迭代过程中的信息, 可以在这里看看
  var maxValue, //获取最大值
    indexArr = [], //获取多个结果的index
    zeroIndex=0;
  maxValue = temps[0].sum;
  indexArr.push(0);
  for (var i = 1, len = temps.length; i < len; i++) {
    var ref = temps[i];
    if (ref.sum === 0) {
      zeroIndex= i+1
    }
    if (ref.sum === maxValue) {
      indexArr.push(i);
    } else if (ref.sum > maxValue) {
      maxValue = ref.sum;
      indexArr.length = 0; //重置数组
      indexArr.push(i);
    }

  }
   console.log("MaxValue: " + maxValue);
  if (maxValue < 0) return [[], 0];

  for (var i = 0, len = indexArr.length; i < len; i++) {
    var index = indexArr[i],
      ref = temps[index];
      console.log(index - ref.num + 1,index+1,zeroIndex);
    sumarr.push(input.slice(index - ref.num + 1, index + 1))
    if(zeroIndex>0&&input.slice(zeroIndex, index + 1).length>0&&zeroIndex>(index - ref.num + 1)){
        sumarr.push(input.slice(zeroIndex, index + 1));
    }
  }
  return [sumarr.length > 1 ? sumarr : sumarr[0], maxValue]
  console.log(sumarr);
}
var arr = [ 3,
  -3,
  -6,
  6,
  5,
  58,
  -4,
  54,
  -78,
  87,
  87,
  86,
  -78,
  72,
  12,
  93,
  -88,
  -46,
  -44,
  -70,
  -55,
  -4,
  -78,
  62,
  59,
  15,
  -63,
  17,
  83,
  92,
  3,
  -62,
  72,
  -78,
  -51,
  -38,
  85,
  -27 ]
console.log(findSubarrMaxSum(arr));
