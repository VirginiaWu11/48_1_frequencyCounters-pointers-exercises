// add whatever parameters you deem necessary
function constructNote(message, letters) {
  if (letters.length === 0) {
    return false;
  }
  const messageObj = frequencyCounter(message);
  const lettersObj = frequencyCounter(letters);
  for (let char in messageObj) {
    if (messageObj[char] > lettersObj[char]) {
      return false;
    }
  }
  return true;
}

function frequencyCounter(str) {
  const obj = {};
  for (let char of str) {
    obj[char] = obj[char] + 1 || 1;
  }
  return obj;
}

module.exports = constructNote;
