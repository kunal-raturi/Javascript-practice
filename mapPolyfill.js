const A = [1, 2, 3, 4, 5];
Array.prototype.map = null;
if (!Array.prototype.map) {
  let newArray = [];
  Array.prototype.map = function (callbackfunction) {
    for (let value of this) {
      newArray.push(callbackfunction(value));
    }
    return newArray;
  };
}

const B = A.map((number) => {
  return number * 2;
});

console.log(B);
