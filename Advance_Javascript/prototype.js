
Array.prototype.reverseJoin = function(separator = ",") {
  return this.slice().reverse().join(separator);
};

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.reverseJoin());        
console.log(numbers.reverseJoin(" - "));  