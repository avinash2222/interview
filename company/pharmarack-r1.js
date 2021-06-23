// input = "ACDACDBC"  
//output= "A2B1C3D2" (character sorted order)

let input  = 'ACDACDBC' AAAAAAB
let sampleOutput = '', count= 0
// input = input.sort()
// for (let i = 0; i< input.length; i++) {
//   let j = i+1
//   while(input[i] === input[j] && j<input.length) {
//     count++
//     j++
//     continue
//   }
//   sampleOutput+=input[i]+count
//   i = j
// }

// output= "A2B1C3D2"

// let sampleOutputObject = {}, sampleOutput = ""

// for (let i = 0; i< input.length; i++) {
//   if (sampleOutputObject[input[i]] !=  undefined) sampleOutputObject[input[i]] += 1
//   else sampleOutputObject[input[i]] = 0
// }
//-------------------------------------------------

// let process1 = await somecall1()
// let process2 = await somecall2()


// let process1 = new Promise((resolve, reject) => {
//   let result  = await somecall1()
//   if (result) resolve()
// } )

// let process2 = new Promise((resolve, reject) => {
//   let result  = await somecall2()
//   if (result) resolve()
// } )

// let resolveData = Promise.all([process1, process2]).then(data => {
//   console.log(data) // [response1, response2]
// })

// let process3 = new Promise((resolve, reject) => {
//   let result  = await somecall3()
//   if (result) resolve()
// } )
//-------------------------------------------
/*
1. let var
2. carrim
3. setTime and setInterval
4. fork in node js
5. clustering in node js(multi threaded)
6. how can i check if key is already present in object
7. how many way we can concatenate two array 
    let aa = [1,2,3], bb = [4,5]
    o/p: let cc = [...aa, ...bb] or aa.push(...bb) or [1,2,3].concat([3,4])
8. what is spread operator
9. accessing key will return what if it is not present in object
10. sort string => "avinash".split('').sort().join('')
11. [1,2,3,4,5].map(el => {if (el>10) return el}) o/p: [undefined, undefined, undefined, undefined, undefined]
*/

/*
{xx: 1, A: 2, a: 3, bb: 2}
Object.keys(dd)
(4) ["xx", "A", "a", "bb"]


new Map() is iteratable 
let data = new Map()
for (let [key, value] of data) {
  console.log(key + ' = ' + value)
}

Object.keys(myObject).sort().map(function(key, index) {
out = out+key+myObject[key]
console.log(key, myObject[key])
});

*/