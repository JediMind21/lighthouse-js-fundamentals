let names = [
  "Chuck Lidell",
  "Hulk Hogan",
  "Freddy Murcury",
  "Mike Jones",
];
const sayHello = function (name) {
  for (name of names) {
    console.log("Hello " + name);
  }
};

sayHello(names);
