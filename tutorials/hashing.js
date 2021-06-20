
//JavaScript doesn't block an attempt to overwrite the hasOwnProperty() method, which may cause an error like this:
// const obj = {}
// obj.name = 'Nathan'
// obj.hasOwnProperty = true

// console.log(obj.hasOwnProperty('name')) 
// Error: obj.hasOwnProperty is not a function
// To handle these shortcomings, JavaScript created another implementation of the Hash Table data structure which is called Map

//------------------------------------------------------------------
// Just like Object, Map allows you to store key-value pairs inside the data structure. 
//JavaScript Map class is another implementation of Hash Table
//you can't add a new entry to the Map object without using the set() method.
// const collection = new Map()

// collection.set('Nathan', '555-0182')
// collection.set('Jane', '555-0182')

// console.log(collection.get('Nathan')) // 555-0182
// console.log(collection.size) // 2

//------------------------------
// const myMap = new Map()

// myMap.set('Nathan', '555-0182')
// myMap.set('Jane', '315-0322')

// for (let [key, value] of myMap) {
//   console.log(`${key} = ${value}`)
// }

//------------------------------------------
let arr = ['jam', 'beef', 'cream', 'jam']
var counts = {}
for (var i = 0; i < arr.length; i++) {
  counts[arr[i]] = 1 + (counts[arr[i]] || 0)
}
console.log(counts) //o/p: { jam: 2, beef: 1, cream: 1 }

//----------------------------------------------
