

console.log('in tutorials callback file..')
//-----------------------------------------------


function doHomework(subject, callback) {
  console.log(`Starting my ${subject} homework.`)
  callback()
}

function testCall(data, callback) {
  console.log('in test callback')
  callback()
}
doHomework('math', function() {
  console.log('Finished my homework')
  testCall('rinku', function() {
    console.log('test callback finishes...')
  })
})
