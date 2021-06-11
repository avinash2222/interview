import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
const opts = { timestamps: { currentTime: () => Math.round(new Date().getTime()) } }

/* user schema, personal details */
const UserSchema = new mongoose.Schema({
  fullName: { type: String, trim: true, default: 'User', required: true }, /* fullName is not editable field*/
  email: { type: String, sparse: true, lowercase: true,  trim: true, required: true },
  password: { type: String, trim: true, required: true },
  userType: [{ type: String, index: true, uppercase: true, default: ['CUSTOMER']}],
  createdAt: Number,
  updatedAt: Number,
}, opts)


UserSchema.methods.toJSON = function() {
  // eslint-disable-next-line no-unused-vars
  const {password, ...rest} = this.toObject()
  return rest
}

/* compound index */
UserSchema.index( { email: 1}, { unique: true } )

UserSchema.pre('save', function(next) {
  var user = this 
  if (!user.isModified('password')) return next()
  bcrypt.genSalt(parseInt(process.env.SALT_WORK_FACTOR), function(err, salt) {
    if (err) return next(err)
    bcrypt.hash(user.password, salt, function (err, hash) {  // hash the password using our new salt
      if (err) return next(err)
      user.password = hash
      next()
    })
  })
})


module.exports = UserSchema

