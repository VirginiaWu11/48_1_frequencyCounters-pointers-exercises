function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let map1 = frequencycounter(str1);
  let map2 = frequencycounter(str2);
  for (let key of map1.keys()) {
    if (map1.get(key) !== map2.get(key)) return false;
  }
  return true;
}

function frequencycounter(str) {
  let newMap = new Map();
  for (let char of str) {
    newMap.has(char)
      ? newMap.set(char, newMap.get(char) + 1)
      : newMap.set(char, 1);
  }
  //   console.log(newMap.entries());
  return newMap;
}

console.log(frequencycounter("hello"));

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
