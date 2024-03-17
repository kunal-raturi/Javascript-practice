function A() {
  let a = 3;
  {
    const a = 6;
    console.log(a);
  }
  console.log(a);
}
A();
