const addToCartModel = require("../../models/cartProduct");

const deleteAddToCartProduct = async (req, res) => {
    try{
        const currentUserId = req.userId
        const addToCartProductId = req.body._id

        const deleteProduct = await addToCartModel.deleteOne({_id : addToCartProductId})

        res.json({
            data : deleteProduct,
            message : "Product Deleted From Cart",
            success : true,
            error : false
        })
    }catch(err){
        res.json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = deleteAddToCartProduct;