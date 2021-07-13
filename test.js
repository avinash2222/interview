

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



