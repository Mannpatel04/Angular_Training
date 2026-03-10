const num = 123;
const result = [...String(num)].map(Number);

console.log(result);



// Explanation:-

// String(num) → converts 123 into "123".
// [..."123"] → spread operator splits it into ["1","2","3"].
// .map(Number) → converts each string digit into a number.