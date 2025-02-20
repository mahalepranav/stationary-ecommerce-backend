const uploadProductPermission = require("../../helpers/permission")
const productModel = require("../../models/productModel")


const UploadProductController = async (req, res) => {
    try{
        const sessionUserId = req.userId
        
        if(!uploadProductPermission(sessionUserId)){
            throw new Error("Permission denied")
        }

        const UploadProduct = new productModel(req.body)
        const savedProduct = await UploadProduct.save()

        res.status(201).json({
            message : "Product upload successfully",
            error : false,
            success : true,
            data : savedProduct
        })
    }catch(err){
        res.json({
            message : err.message || err  ,
            error : true,
            success : false,
        })
    }
}

module.exports = UploadProductController;