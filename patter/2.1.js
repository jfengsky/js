// Generated by CoffeeScript 1.8.0
var i, man, myFunc, result;

man = {
  hands: 2,
  legs: 2,
  heads: 1
};

if (typeof Object.prototype.clone === "undefined") {
  Object.prototype.clone = function() {};
}

for (i in man) {
  if (man.hasOwnProperty(i)) {
    console.log(i, ":", man[i]);
  }
}

for (i in man) {
  console.log(i, ":", man[i]);
}

(function() {
  alert('watch out');
})();

(function() {
  alert('watch out');
})();

result = (function() {
  return 111;
})();

myFunc = function(param) {
  var result1;
  if (!myFunc.cache[param]) {
    result1 = {};
    myFunc.cache[param] = result;
  }
  return myFunc.cache[param];
};
