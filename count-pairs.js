// add whatever parameters you deem necessary

// Time Complexity - O(N * log(N))
// function countPairs(arr, target) {
//   let count = 0;
//   arr.sort((a, b) => a - b);
//   console.log(arr);
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     console.log(arr[left], arr[right]);
//     if (arr[left] + arr[right] === target) {
//       count++;
//       left++;
//     } else if (arr[left] + arr[right] > target) {
//       right--;
//     } else {
//       left++;
//     }
//   }
//   return count;
// }

// Time Complexity - O(N)
function countPairs(arr, target) {
  const obj = {};
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let lookupVal = target - arr[i];
    if (obj[lookupVal]) {
      count++;
    }
    obj[arr[i]] = true;
  }
  return count;
}

// [1,2,3,4,5]
// [-2,-1,0,1,2,3]
module.exports = countPairs;

// {-2 : true,
//  -1: true,
// 0: true,
// 1: true,
// 2:true}

// [-2,-1,0,1,2,3],0 //2
//              ^

//      target = 0
//     lookup = 0 - (-1) = 1 is this in the object? no
//             0 - 0 =0
//             0 - 1 = -1 count++
//             0 - 2 = -2 count++

//             0-3 = -3 nope, return count
