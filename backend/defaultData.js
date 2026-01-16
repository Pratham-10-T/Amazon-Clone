const Products = require("./models/productsSchema")
const productsdata = require("./constants/productsdata")

const defaultData = async()=>{
    

    try{
    const storeData = await Products.insertMany(productsdata)
    console.log("Inserted:", storeData.length, "documents");

}
    catch (error) {
        console.log("Insert error ❌", error.message);
    }
}

module.exports = defaultData