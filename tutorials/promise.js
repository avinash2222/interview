

console.log('in promise file...')

//---------------------1-------------------------

const promFunc = new Promise((resolve, reject) => {
  // resolve({data: 'promise is resolved..'})
  reject({data: 'promise is not resolved..'})
})

promFunc.then(async result => {
  console.log(result)
}).catch(error => {
  console.log(error)
})

//------------------------------------------------


