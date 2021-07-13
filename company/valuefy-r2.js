

let a = [2,5,6,[5,6,[5,6]],5,6,[5,6]]

let p = []

function flattenAndPush(subarray) { 
  for (let item of subarray) {
    if (typeof item === 'object') flattenAndPush(item)
    else p.push(item)
  }
}

flattenAndPush(a)
// for (let item of a) {
//   if (typeof item === 'object') flattenAndPush(item)
//   else p.push(item)
// }


console.log(a)
console.log(p)



/*
  1. how to handle when sending multiple sms on same api, if it failed, how to know message is delivered 
  2. deep copy
  3. sql query
  4. promise.all make it success even if one of the promise failed

*/