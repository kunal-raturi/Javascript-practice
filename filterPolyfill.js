const a = [1, 2, 3, 4, 5];
const b = a.filter((num) => num % 2 === 0);
console.log(b);

Array.prototype.filter = null;
if (!Array.prototype.filter) {
  Array.prototype.filter = function (callbackfunction, intialValue) {
    let newArray = [];
    for (i = 0; i < this.length; i++) {
      if (callbackfunction(this[i])) {
        newArray.push(this[i]);
      }
    }
    return newArray;
  };
}
