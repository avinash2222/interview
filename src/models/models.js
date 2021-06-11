import mongoose from 'mongoose'
import UserSchema from '../models/user'

const models = {
  User: mongoose.model('User', UserSchema),
}

// explicitly create each collection
// for Mongoose multi-document write support which is needed for transactions
Object.values(models).forEach(model => {
  model.createCollection()
})

//TODO :: Only for DEV releases
async function createDummyUsers(){
  let usersIntoInsert = [
    {fullName: 'User', email: 'user@gmail.com', password: 'user', userRole: 'CUSTOMER' },
    {fullName: 'admin', email: 'admin@gmail.com', password: 'admin123',  userRole: 'ADMIN'},
  ]
  let User = models.User
  usersIntoInsert.forEach(async (newUser) => {
    let user = await User.findOne({email: newUser.email})
    if (user == null) await new User(newUser).save()
  })
}
createDummyUsers()

module.exports = {
  User         : models.User,
}
