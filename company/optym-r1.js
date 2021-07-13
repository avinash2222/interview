

// // aync function testIOOpen (req, res) {


// //   let result = await User.find()
// //   console.log('hello')
// //   return res.status(200).send(result)
// // }

// // function test() {
// //   console.log('hi..')
// // }

// // testIOOpen()
// // test()

// // function testLog(params) {
// //   setTimeout(()=> console.log("Log1"))
// //   console.log("Log2")
// // }
// // testLog()



// // console.log([1,2,3,4].map(data => data*2))
// // console.log([1,2,3,4].filter(data => data == 2))
// // higher oreder function
// // po
// // // let map = []

// // // for (let i =0; )

// // list = [L1, L2, L3], API = GET http://localhost:9000/loco/detail/{LocoCode}
// // let result = []
// // function demo{
// //   list.forEach(el => {
// //     let data = axios(`http://localhost:9000/loco/detail/${el}`)
// //     result.push(data)
// //   })
// // }

// // 1. ApiLog table (ReqID, ReqMethod, ApiUrl, ResStatus, ReqArrivedAt)
// // findout how many of POST calls failed every hour. Consider ResStatus != 200 is request failure


// // select count(*) from ApiLog where ResStatus != 200 && ReqMethod=='POST' groupBy ReqArrivedAt

 
// // Display an alert box after 3 seconds (3000 milliseconds):
// // setTimeout(function(){ alert("Hello"); }, 3000);
// // setTimeout is asynchronous
 
// // console.log(1)
// // console.log(2)
// // setTimeout(() => {
// //   console.log(3)
// // }, 0)
 
// // console.log(4)
// // // The output, surprisingly, will be
// // /*
// // 1
// // 2
// // 4
// // 3
// // */


// async function bi() {
//   let i = 0
//   while(i++<10000000);
//   console.log('bi function..', i)
// }

// function tata() {
//   console.log('TATA')
// }

// async function hi() {
//   console.log('hi function..')
// }

// (async () => {
//   bi()
//   await hi()
//   tata()
// }) 



// console.log(fetch('https://api.github.com/users/avinash2222')
// .then(response => response.json())
// .then(data => data))


why 