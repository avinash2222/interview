import { User } from '../src/models/models'
import fetch from 'node-fetch'
import 'colors'
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
//------------------------4 async------------------------------------------
// let hello = () => console.log('this is async code')
// setTimeout(hello, 0)
// console.log('this is not blocked..')
//-------------------------------------------------------------------------
