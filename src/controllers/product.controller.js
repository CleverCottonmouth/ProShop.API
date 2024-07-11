import { asyncHandler } from "../utils/asyncHandler.js";
import Product from "../models/product.model.js";

const getProducts = asyncHandler(async (req, res)=>{
  try {
    const products = await Product.find();
    res.status(200).json({
      status: 200,
      message: "Products fetched successfully",
      data: products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

const getProductById = asyncHandler(async(req, res)=>{
  try{
    if(req.id==null){
      
    }
    const product = await Product.findById(req.params.id);
    if(!product){
      return res.status(404).json({message: "Product not found"})
    }
  }catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

export {getProducts,getProductById};