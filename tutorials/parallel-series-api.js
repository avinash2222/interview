import axios from 'axios'
import async from 'async'

//@--------------custom parallel using promises-------------------------------------
const api1 = (searchRec) => {
  return new Promise((resolve, reject) => {
    let searchUrl = 'https://coolapi.com'
    return axios({
      url: searchUrl, // Endpoint
      data: searchRec, // Params
      timeout: 10000, // e.g. 10s
      method: 'POST',
    }).then((response) => {
      resolve(response.data)  // return results
    }).catch((error) => {
      resolve(null)
    })
  })
}

const api2 = (searchRec) => {
  // Similar to api1
}

// sample search criteria
let searchRec = {
  destId: 'Seattle',
  categoryId: 47,
  sortOrder: 'POPULAR',
}

// Kick off each call simultaneously
let promise1 = api1 (searchRec)
let promise2 = api2 (searchRec)

// Gather results
let [results1, results2] = (async () => {await Promise.all([promise1, promise2])})()
console.log(results1, results2)

//@--------------------async parallel-------------------------------------------

async.parallel([
  function(callback) {
    setTimeout(function() {
      console.log('Task One')
      callback(null, 1)
    }, 200)
  },
  function(callback) {
    setTimeout(function() {
      console.log('Task Two')
      callback(null, 2)
    }, 100)
  }
],
function(err, results) {
  console.log(results)
  // the results array will equal [1, 2] even though
  // the second function had a shorter timeout.
})

// an example using an object instead of an array
async.parallel({
  task1: function(callback) {
    setTimeout(function() {
      console.log('Task One')
      callback(null, 1)
    }, 200)
  },
  task2: function(callback) {
    setTimeout(function() {
      console.log('Task Two')
      callback(null, 2)
    }, 100)
  }
}, function(err, results) {
  console.log(results)
  // results now equals to: { task1: 1, task2: 2 }
})

//@---------------async series---------------------------------------------------
async.series([
  function(callback) {
    console.log('one')
    callback(null, 1)
  },
  function(callback) {
    console.log('two')
    callback(null, 2)
  },
  function(callback) {
    console.log('three')
    callback(null, 3)
  }
],
function(err, results) {
  console.log(result)
  // results is now equal to [1, 2, 3]
})

async.series({
  1: function(callback) {
    setTimeout(function() {
      console.log('Task 1')
      callback(null, 'one')
    }, 200)
  },
  2: function(callback) {
    setTimeout(function() {
      console.log('Task 2')
      callback(null, 'two')
    }, 300)
  },
  3: function(callback) {
    setTimeout(function() {
      console.log('Task 3')
      callback(null, 'three')
    }, 100)
  }
},
function(err, results) {
  console.log(results)
  // results is now equal to: { 1: 'one', 2: 'two', 3:'three' }
})