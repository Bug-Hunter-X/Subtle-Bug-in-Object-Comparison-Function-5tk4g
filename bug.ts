function compare(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0; // This line is important, handles equality
  }
}

// This works for numbers but may not work as expected for all types
console.log(compare(1, 2)); // -1
console.log(compare(2, 1)); // 1
console.log(compare(1, 1)); // 0

console.log(compare("a", "b")); // -1
console.log(compare("b", "a")); // 1
console.log(compare("a", "a")); // 0

//Issue when dealing with objects
const obj1 = { name: "John", age: 30 };
const obj2 = { name: "Jane", age: 25 };

console.log(compare(obj1, obj2)); //Incorrect comparison
