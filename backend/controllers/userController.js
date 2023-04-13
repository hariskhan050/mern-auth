const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')


//@Access PUBLIC
//route POST /api/users
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    // console.log(req.body, 'dfghjk');
    //check for the empty credentials
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please complete all the fields')
    }

    //check if the user exist
    const userExist = await User.findOne({ email })

    if (userExist) {
        res.status(400)
        throw new Error('User already exist')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })
    if (user) {
        res.status(200).send({
            _id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            token: generateJwt(user._id)
        })
    }
    else {
        res.status(400)
        throw new Error('Some error in registration')
    }
})

//@Access PUBLIC
//route POST /api/users/login
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    const passwordMatch = await bcrypt.compare(password, user.password)
    if (user && passwordMatch) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateJwt(user._id)
        })
    }
    else {
        res.status(400)
        throw new Error('Invalid email or password')
    }
})

//@Access Private
//route POST /api/users/me
const getUserData = asyncHandler(async (req, res) => {
    // const { _id, name, email } = await User.findById(req.user.id)
    res.json(req.user)
})


//generate jwt 
const generateJwt = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })
}


module.exports = {
    registerUser,
    loginUser,
    getUserData
}