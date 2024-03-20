const a = [2, 5, 3, 1, 6, 7, 3, 5];
a.sort();
console.log(a);
if (!Array.prototype.sort) {
  Array.prototype.sort = function (compareFunction) {
    if (!compareFunction) {
      return this.slice().sort((a, b) => String(a).localeCompare(String(b)));
    }

    return this.slice().sort(compareFunction);
  };
}
