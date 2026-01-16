const express = require("express")
const router = new express.Router()
const Products = require("../models/productsSchema")
const products = require("../constants/productsdata")
const User = require("../models/userSchema")
const bcrypt = require("bcryptjs")
const authenticate = require("../middleware")

router.get("/getProducts", async(req, res)=>{
    try{
   const productsdata = await Products.find()
   


      res.status(201).json(productsdata)
    }
    catch(error){
console.log("error" + error.message)
    }
})


router.get("/getProductsOne/:id", async(req, res)=>{
    try{
        
      const {id} = req.params
      console.log(id)
     
      const individualdata = await Products.findOne({id:id})
      console.log(individualdata)
      res.status(201).json(individualdata) 
    }
    catch(error){
        
console.log("error" + error.message)
    }
})


router.post("/signup", async(req,res)=>{
    
     const {fname, email, number, password, confirmPassword} = req.body

     if(!fname || !email || !number || !password || !confirmPassword){
        res.status(422).json({error : "Incomplete Data"})
       
     }

     try{
     const preUser = await User.findOne({email:email})

     if(preUser){
        res.status(422).json({error : "This email already exists"})

     } else if (password !== confirmPassword){
        res.status(422).json({error : "Passwords must match!"})
     }
     else {
        const finalUser = new User({
            fname, email, number, password, confirmPassword
        });

        const storeData = await finalUser.save()
        console.log(storeData)
        res.status(201).json(storeData)
     }



     }catch(error){
     console.log("error" + error.message) 
     }

     console.log(req.body)
})


router.post("/login", async(req, res)=>{
    const {email, password} = req.body

    if(!email || !password) {
        res.status(400).json({error : "Invalid data"})
    }
    try{
        const preUser = await User.findOne({email:email})

        if(preUser){
            const isMatch = await bcrypt.compare(password, preUser.password)

            const token = await preUser.generateAuthToken()

            res.cookie("AmazonWeb",token,{
            sameSite:"Lax",
            httpOnly: true,
            secure: false,
            path : "/"
            })

            
            if(!isMatch){
            res.status(400).json({error : "Invalid data"})
            }
            else{
                res.status(201).json(preUser)
            }
        }
        else{
            res.status(400).json({error : "Invalid data"})
        }

    }

    catch(error){
        console.log("error" + error.message);
    }
})



router.post("/addcart/:id", authenticate, async(req, res)=>{
   try{
    const {id} = req.params
    const cart = await Products.findOne({id:id})
    console.log(cart + "cart value")

     const userContact = await User.findOne({_id:req.userID})
     console.log(userContact);

     if(userContact){
        const cartData = await userContact.addCartData(cart)
        await userContact.save()
        console.log(cartData)
        res.status(201).json(userContact)
     }else{
        res.status(401).json({error : "invalid"})
     }

   }
   catch(error){
    console.log(error + "error  message")
   }
})

router.get("/cartdetails", authenticate, async(req, res)=>{
   try{

    const buyuser = await Products.findOne({_id:req.userID})
     res.status(201).json(buyuser)
    
   }catch(error){

    console.log("error" + error)
   } 
})


router.get("/validuser", authenticate, async(req, res)=>{
    try{
 
     const validuserone = await Products.findOne({_id:req.userID})
      res.status(201).json(validuserone)
     
    }catch(error){
 
     console.log("error" + error)
    } 
 })

 router.delete("/remove/:id", authenticate, async(req, res)=>{
    try{
        const { id } = req.params
   req.rootUser.carts = req.rootUser.carts.filter((curval)=>{
    return curval.id != id
   })
req.rootUser.save()
res.status(201).json(req.rootUser)
console.log("item removed")
}catch(error){
console.log("error" + error)
res.status(400).json(req.rootUser)  
}
    

 })

 router.get("/logout", authenticate, async(res, req)=>{
try {
    req.rootUser.tokens = req.rootUser.tokens.filter((curelem)=>{
        return curelem.token !== req.token
    })

    res.clearCookie("AmazonWeb",{path:"/"})
    req.rootUser.save()
    res.status(201).json(req.rootUser.tokens)
} catch (error) {
    
}
 })
module.exports = router;