// singleton object
// A singleton object is an object that is created only once and shared everywhere in the program. No matter how many times you try to create it, you'll always get the same object.
// here is an example
const remote = {
  brand: "samsung",
  use: function () {
    console.log("controlling tv..");
  },
};
const remote1 = remote;
const remote2 = remote;
console.log(remote1 === remote2);
