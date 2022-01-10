// add whatever parameters you deem necessary
function separatePositive(arr) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex < rightIndex) {
    if (arr[leftIndex] < 0 && arr[rightIndex] > 0) {
      let temp = arr[leftIndex];
      arr[leftIndex] = arr[rightIndex];
      arr[rightIndex] = temp;
    }
    if (arr[leftIndex] > 0) {
      leftIndex++;
    }
    if (arr[rightIndex] < 0) {
      rightIndex--;
    }
  }
  return arr;
}
module.exports = separatePositive;

// [2, -1, -3, 6, -8, 10]
//     ^              ^
//     10             -1
//         ^   ^
//         6  -3
