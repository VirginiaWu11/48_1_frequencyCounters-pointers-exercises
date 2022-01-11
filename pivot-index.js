// add whatever parameters you deem necessary
function pivotIndex(arr) {
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 1; i < arr.length; i++) {
    rightSum += arr[i];
  }
  for (let i = 0; i < arr.length - 1; i++) {
    leftSum += arr[i];
    rightSum -= arr[i + 1];
    if (leftSum === rightSum) {
      return i + 1;
    }
  }
  return -1;
}
module.exports = pivotIndex;
