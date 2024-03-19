const A = [1, 2, 3, 4, 5];
Array.prototype.forEach = null;

if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callbackfunction) {
    for (let value of this) {
      callbackfunction(value);
    }
  };
}
A.forEach((val) => {
  console.log(val);
});
