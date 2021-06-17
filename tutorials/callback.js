

console.log('in tutorials callback file..')
//--------------------1---------------------------


// function doHomework(subject, callback) {
//   console.log(`Starting my ${subject} homework.`)
//   callback()
// }

// function testCall(data, callback) {
//   console.log('in test callback')
//   callback()
// }
// doHomework('math', function() {
//   console.log('Finished my homework')
//   testCall('rinku', function() {
//     console.log('test callback finishes...')
//   })
// })

//--------------2------------------------------------------

const cbTest = () => {
  setTimeout(()=>{
    return {
      name:'DOG',
      sex: 'MALE',
    }
  }, 1000)
}

let result = cbTest()
console.log('result: ',result)
//---------------------------
const cbTest2 = (cb) => {
  setTimeout(()=>{
    let data =  {
      name:'DOG',
      sex: 'MALE',
    }
    cb(data)
  }, 1000)
}

cbTest2((data)=> console.log('result2:', data))

// const cb = (data) => {
//   console.log('result2:', data)
// }
// cbTest2(cb)
//------------------------------------------
