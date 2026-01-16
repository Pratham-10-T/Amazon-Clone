const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const Products = require("./productsSchema")
const secretKey = process.env.KEY


const userSchema = new mongoose.Schema({
    fname: {
        type : String,
        required : true,
    },

    email: {
        type : String,
        required : true,
        unique : true, 
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error ("not valid Email address.")
            }
        } 
    },

    number: {
        type : String,
        required : true,
        unique : true, 
        maxlength : 10,
       
    },
   
    password: {
        type : String,
        required : true,
        minlength : 6,
        
    },

    confirmPassword: {
       type : String,
       required : true,
       minlength : 6
      
    },

    tokens : [ {
        token : {
             type : String,
             required : true,
        }
    }
],
  carts : Array,
})

userSchema.pre("save", async function(next){
    if (this.isModified("password")){
    this.password = await bcrypt.hash(this.password, 12)
    this.confirmPassword = await bcrypt.hash(this.confirmPassword, 12)
}
next()
})


userSchema.methods.generateAuthToken = async function(){
    try {
        let token = jwt.sign({_id:this._id},secretKey)
        this.tokens = this.tokens.concat({token:token})
        await this.save()
        return token;
    } catch (error) {
        console.log(error)
    }
}

userSchema.methods.addCartData = async function(cart){
    try {
        this.carts = this.carts.concat(cart)
        await this.save()
        return this.carts
    } catch (error) {
       console.log(error); 
    }
}




const Users = new mongoose.model("Users", userSchema)



module.exports = Users;