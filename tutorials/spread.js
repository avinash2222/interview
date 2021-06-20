//deep copy failed in case of nested object if spread operator are used for copying data
//if object is nested then spread operator does not perform a deep copy of object properties to the target object.

const original = {a: {b: 1}};

const falseCopy = {...original};

falseCopy.a.b = 2;

console.log(falseCopy) // logs {a: {b: 2}}
console.log(original) // also logs {a: {b: 2}} WTF!
