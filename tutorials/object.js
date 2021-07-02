// const aa = 12
// aa = 13 // not allowed

//----------------------------------
// const bb = {a:1, b:2}
// bb['a'] = 12
// bb.b = 23 //allowed

//----------------------------------
const a = {a:1, b:2, c:3}
for (let key in a) {
  // a.key = a.key + 5 //this wont work as key is dynamic
  a[key] = a[key] + 5
}
console.log(a)

//-----------------------------------

