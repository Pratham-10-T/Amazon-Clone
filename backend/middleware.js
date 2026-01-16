const jwt = require("jsonwebtoken")
const User = require("../backend/constants/usersdata")
const secretKey = process.env.KEY

const authenticate = async(req, res, next)=>{
    try{
    const token = req.cookies.AmazonWeb

    const verifyToken = jwt.verify(token, secretKey)
    console.log(verifyToken)

    const rootUser = await User.findOne({_id:verifyToken._id,"tokens.token":token})
    
    if(!rootUser) throw new Error("User not found")

    req.token = token
    req.rootUser = rootUser
    req.userID = rootUser._id 

    next()
}
catch(error){
    res.status(401).send("unauthorized: no token provide")
    console.log(error)
}
}



module.exports = authenticate