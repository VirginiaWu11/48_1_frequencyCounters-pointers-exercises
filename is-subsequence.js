// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
  let str2Pointer = 0;
  let str1Pointer = 0;

  while (str1Pointer < str1.length && str2Pointer < str2.length) {
    if (str1[str1Pointer] === str2[str2Pointer]) {
      str1Pointer++;
    }
    str2Pointer++;
  }
  return str1Pointer === str1.length;
}
module.exports = isSubsequence;

// "hello", "hello world";
