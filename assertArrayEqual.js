// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑Assertion Failed: " + actual + " !== " + expected);
  }
};
const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return "🛑🛑🛑Assertion Failed: " + actual + " !== " + expected;
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        return "🛑🛑🛑Assertion Failed: " + actual + " !== " + expected;
      }
    }
    return "✅✅✅Assertion Passed: " + actual + " === " + expected;
  }
};
// TEST CODE
   
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
    
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);