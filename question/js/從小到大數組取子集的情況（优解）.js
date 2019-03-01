function findSubarrMaxSum(arr) {
  let min = 0, max = 0, maxIdx = [-1], ranges = [[]];
  for (let i = 0, acc = 0; i < arr.length; i++) {
    acc += arr[i];
    if (acc - min > max) {
      max = acc - min, ranges = maxIdx.map(j => [j, i]);
    } else if (acc - min === max) {
      ranges.push(...maxIdx.map(j => [j, i]));
    }
    if (acc < min) {
      min = acc, maxIdx = [i];
    } else if (acc === min) {
      maxIdx.push(i);
    }
  }
  if (ranges[0].length) {
    ranges = ranges.map(([i, j])=> arr.slice(i + 1, j + 1));
    return (ranges.length > 1 ? [ranges] : ranges).concat(max);
  }
  return [[], 0];
}
