// add whatever parameters you deem necessary
function averagePair(arr, average) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex < rightIndex) {
    if ((arr[leftIndex] + arr[rightIndex]) / 2 < average) {
      leftIndex++;
    } else if ((arr[leftIndex] + arr[rightIndex]) / 2 > average) {
      rightIndex--;
    } else {
      return true;
    }
  }
  return false;
}

module.exports = averagePair;
