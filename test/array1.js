// Generated by CoffeeScript 1.6.3
var evens, i, nums, _i;

nums = [];

for (i = _i = 0; _i <= 20; i = ++_i) {
  nums[i] = i + 1;
}

console.log(nums);

evens = nums.filter(function(_num) {
  return _num % 2 === 0;
});

console.log(evens);
