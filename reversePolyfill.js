const a = [1, 2, 3, 4, 5];
a.reverse();
console.log(a);
if (!Array.prototype.reverse) {
  Array.prototype.reverse = function () {
    let start = 0;
    let end = this.length - 1;

    while (start < end) [this[start], this[end]] = [this[end], this[start]];
    start++;
    end--;
  };

  return this;
}
