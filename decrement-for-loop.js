module.exports = function (num) {
var total = 1;
for (var i = num; i >= 1; i--) {
    total *= i;
  }
  return total;
}
