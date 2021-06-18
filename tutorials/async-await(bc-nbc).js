// import { User } from '../src/models/models'
// import fetch from 'node-fetch'
// import 'colors'
// import { resolve } from 'bluebird'
// import { reject } from 'async'
// console.log('async-await file started...')

//----------------------1 async ----------------------------
// let username= 'avinash2222'
// setTimeout(() => console.log('hello'), 0) 
// fetch(`https://api.github.com/users/${username}`).then(response => response.json()).then(data => console.log(data.name))
// console.log('What soup?')

//---------------------2 async ------------------------------
// async function dbCall() {
//   await User.find().select('fullName').limit(1)
// }
// dbCall()
// console.log('this is not block by DB call...')

//---------------------3 sync ------------------------------
// async function dbCall() {
//   let i = 0
//   console.log('started...')
//   while(i++<1900000000);
//   console.log('found async function..')
//   let result = await User.find().select('fullName').limit(1)
//   console.log('====', result)
// }
// dbCall()
// console.log('this is block by sync code...')

//----------------------4 sync function----------------------------------
// async function syncFunction() {
//   console.log('this is sync function...')
// }
// syncFunction()
// console.log('this is sync function___')

//------------------------5 async------------------------------------------
// let hello = () => console.log('this is async code')
// setTimeout(hello, 0)
// console.log('this is not blocked..')

//------------------------6 async------------------------------------------

// function promiseFuncA() {
//   const promiseA =  new Promise((resolve, reject) =>{
//     resolve('promise A is resolved..')
//   })
//   return promiseA
// }

// function promiseFuncB() {
//   const promiseB =  new Promise((resolve, reject) =>{
//     resolve('promise B is resolved..')
//   })
//   return promiseB
// }

// async function main (){
//   let promiseA = await promiseFuncA()
//   let promiseB = await promiseFuncB()
//   console.log(promiseA, promiseB)
// }
// main()
// console.log('after main..')

//----------------------7 async ---------------------------
// function promiseFuncA() {
//   return new Promise((resolve, reject) =>{
//     // resolve('promise A is resolved..')
//     reject('promise A is rejected..')
//   })
// }

// const promiseC = 42
// const promiseD = Promise.resolve('D is resolved')
// const promiseE = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     resolve('promise E is resolved')
//   }, 2000)
// })

// function promiseFuncB() {
//   return new Promise((resolve, reject) =>{
//     resolve('promise B is resolved..')
//   })
// }

// async function main(){
//   try {
//     // let promiseA = await promiseFuncA()
//     // let promiseB = await promiseFuncB()
//     // console.log(promiseA, promiseB)
//     Promise.all([promiseFuncA(), promiseFuncB(), promiseC, promiseD, promiseE]).then(data => {
//       console.log(data)
//     }).catch(err => {
//       console.log('then err:', err)
//     })
//   } catch(err) {
//     console.log('catch err:', err)
//   }
// }
// main()
// console.log('after main..')

//----------------------------------------------------------

