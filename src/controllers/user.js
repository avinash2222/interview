import { User } from '../models/models'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import _ from 'lodash'

/* get all users */
export async function  getUsers(req, res){
  try {
    let users = await User.find()
    res.status(201).send(users)
  } catch(err) {
    res.status(500).send({status: 'error', message: err})
  }
}

export async function login(req, res){  
  try {
    let {email, password} = req.body
    let user = await User.findOne({email: email}).select('_id email password userType') 
    if (!user) return res.status(404).send({status: 'error', message : "User doesn't exist"})
    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) return res.status(401).send({success: false, message: "authentication failed. Password doesn't match"})
    const accessToken = jwt.sign({ _id: user._id, email: user.email,  userType: user.userType }, process.env.ACCESS_TOKEN_SECRET)
    res.status(200).send({success: true, accessToken})
  } catch(error) {
    res.status(500).send({status: 'error', message: 'server error, please try after sometime!'})
  } 
}

export async function signup(req, res) {
  try {
    const { fullName, email, password, userType } = req.body
    let newUser = new User({ fullName, email, password, userType})
    return res.status(200).send(await newUser.save())
  } catch (err) {
    res.status(500).send(err)
  }
}


