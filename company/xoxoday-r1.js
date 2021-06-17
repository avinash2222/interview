/* index.js file */
const express =  require('express')
const {auth} = require('./auth')
const userRoute = require('./route')

const app = express()

app.get('/', (req,res)=> res.send('hi...'))
app.use(auth)
userRoute(app)
// app.get('/ping', (req,res) => res.send("I'm ping"))

app.listen(8080)

/*--------------------------------------------------------------------*/
/* route.js file */
// module.exports = app => {
//   app.get('/ping', (req,res) => res.send('I should be authorized'))
// }

module.exports = app => {
  app
    .route('/ping')
    .get((req,res) => res.send("I'm ping"))
}

/*--------------------------------------------------------------------*/
/* auth.js file */
const auth = (req, res, next) => {
  res.send('not logged in')
}

module.exports = {auth}