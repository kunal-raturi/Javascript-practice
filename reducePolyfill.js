const A = [1, 2, 3, 4, 5];

Array.prototype.reduce = null;

if (!Array.prototype.reduce) {
  Array.prototype.reduce = function (callbackfunction, intialValue) {
    let accumulator = intialValue;
    for (let i = 0; i < this.length; i++) {
      accumulator = accumulator
        ? callbackfunction(accumulator, this[i])
        : this[i];
    }
    return accumulator;
  };
}

const sum = A.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);
