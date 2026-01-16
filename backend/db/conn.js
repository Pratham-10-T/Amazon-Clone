const mongoose = require("mongoose")
const defaultData = require("../defaultData")
console.log("🔍 DATABASE ENV VAR:", process.env.DATABASE);
mongoose.connect(process.env.DATABASE)
.then(()=> {
 console.log("database is connected")
 defaultData();
} )
 .catch((error)=> console.log("error" + error.message))    

