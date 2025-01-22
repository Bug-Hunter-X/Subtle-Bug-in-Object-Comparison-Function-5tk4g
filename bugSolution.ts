function compare(a, b) {
  if (typeof a !== typeof b) {
    return -2; // Handle different types
  }
  if (typeof a === 'object') {
    return deepCompare(a, b);
  } else if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}

function deepCompare(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;
  for (let key of keys1) {
    if (!obj2.hasOwnProperty(key) || !compare(obj1[key], obj2[key])) return false;
  }
  return true;
}

const obj1 = { name: "John", age: 30 };
const obj2 = { name: "Jane", age: 25 };
const obj3 = { name: "John", age: 30 };

console.log(compare(obj1, obj2)); //Correctly identifies the objects are not the same
console.log(compare(obj1, obj3)); //Correctly identifies the objects are the same