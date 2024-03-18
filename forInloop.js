const person = {
  name: "kunak",
  age: 26,
  city: "surat",
};

for (const key in person) {
  console.log(key + ":", person[key]);
}

Object.prototype.country = "India";

//To avoid iterating over inherited properties and only iterate over the object's own properties, you should use hasOwnProperty() within the for...in loop as shown in the example:

for (const key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key + ":", person[key]);
  }
}
