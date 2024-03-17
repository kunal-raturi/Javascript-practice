const c = [1, 2];
const d = c;
d.push(9);
console.log(c);
console.log(d);

const a = [5, 6];
const b = [5, 6];
b.push(9);
console.log(a);
console.log(b);

a.forEach((number) => {
  console.log(number);
});

let newA = a.map((number) => {
  return number * 2;
});
console.log(newA);

let NewA = a.filter((number) => {
  return number > 5;
});
console.log(NewA);

const n = a.find((number) => {
  return number > 1;
});
console.log(n);

const istrue = a.some((number) => {
  return number > 5;
});
console.log(istrue);

const i = a.every((number) => {
  return number > 5;
});
console.log(i);

const N = [1, 2, 3, 4, 5];
const sum = N.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum);
