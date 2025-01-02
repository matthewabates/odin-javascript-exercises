const add = function(x, y) {
	return x+y
};

const subtract = function(x, y) {
	return x-y
};

const sum = function(nums) {
	return nums.reduce((acc,n) => acc+n, 0)
};

const multiply = function(nums) {
  return nums.reduce((acc, n) => acc*n)
};

const power = function(x, y) {
	return x**y
};

const factorial = function(x) {
  let nums = Array.from(Array(x).keys()).map(n=>n+1)
  return nums.reduce((acc, n) => acc*n, 1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
