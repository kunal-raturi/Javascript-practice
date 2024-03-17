const [a, b] = [2, 4];
console.log({ a, b });
const [x, y, z] = [2, 4];
console.log({ x, y, z });
const [p, m] = [2, 4, 5];
console.log({ p, m });
const [w, s] = [2, [3, 4]];
console.log({ w, s });
const [h, t] = [
  [1, 2],
  [3, 4],
];
console.log({ h, t });
const [u, [l, g]] = [1, [2, [3]]];
console.log({ u, l, g });
const [c, , d] = [2, 3, 4];
console.log({ c, d });
const [k, v] = [2, , 3];
console.log({ k, v });
