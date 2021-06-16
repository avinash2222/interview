import { User } from './src/models/models'
import fetch from 'node-fetch'

console.log('in test file...'.blue)
//------------------------------------------------------


async function dbCall() {
  await User.find().select('fullName').limit(1).then(data => console.log(data))
  console.log('this is after promish')
  return 'this is after promish..........'
}
dbCall().then(data => console.log(data))
console.log('this is not block by DB call...')


