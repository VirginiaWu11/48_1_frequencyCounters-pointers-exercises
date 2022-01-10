// add whatever parameters you deem necessary
function sameFrequency(int1, int2) {
  const map1 = frequencyCounter(int1);
  const map2 = frequencyCounter(int2);
  for (let key of map1.keys()) {
    if (map1.get(key) !== map2.get(key)) {
      return false;
    }
  }
  return true;
}

function frequencyCounter(int) {
  const newMap = new Map();
  while (int > 0) {
    let temp = int % 10;
    newMap.has(temp)
      ? newMap.set(temp, newMap.get(temp) + 1)
      : newMap.set(temp, 1);
    int = Math.floor(int / 10);
  }
  return newMap;
}

// console.log(frequencyCounter(121123));

module.exports = sameFrequency;
