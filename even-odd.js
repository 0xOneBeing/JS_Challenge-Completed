// module.exports = function (a) {
//   if (typeof = "number") {
//     return "Not a number";
//   }
//   else {
//         if (a % 2 == 0) {
//           return "Even";
//         }
//         else {
//           return "Odd";
//   }
// }
module.exports = function(a) {
//var a = 0;
if (typeof a != 'number') {
    return "Not a number";
  }
  else {
        if (a % 2 == 0) {
          return "Even";
        }
        else {
          return "Odd";
    }
  }
}
