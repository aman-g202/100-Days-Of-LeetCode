class Aman {
  age = Symbol("age");
  constructor() {
    this.age = 10;
  }

  getType() {
    return this["age"];
  }
}

const aman = new Aman();
console.log(aman.age);
aman.age = 20;
console.log(aman.getType());

var Pet = (function () {
  var typeSymbol = Symbol('type');
  function Pet1(type) {
    this[typeSymbol] = type;
  }
  Pet1.prototype.getType = function () {
    return this[typeSymbol];
  };
  return Pet1;
})();

var a = new Pet("dog");
console.log(a.getType()); //Output: dog
a.type = 'cat';
//Stays private
console.log(a.getType()); //Output: dog
