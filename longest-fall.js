// add whatever parameters you deem necessary
function longestFall(arr) {
  let longestCount = 1;
  let currentCount = 1;
  if (arr.length === 0) return 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      currentCount++;
      if (currentCount > longestCount) {
        longestCount = currentCount;
      }
    } else {
      currentCount = 1;
    }
  }
  return longestCount;
}

module.exports = longestFall;
