const express = require('express');
const router=express.Router();
const Product =require('../models/product')
const Review =require('../models/review')

router.get('/products',async(req,res)=>{
    try{
    const products=await Product.find({});
    res.json(products)
    }
    catch(e){
        console.log("Error in getting products");
    }
})
router.post('/products',async(req,res)=>{
    // console.log(req.body);
    const product=await Product.create(req.body)
    res.status(200).json(product);
    

})
router.get('/products/:id',async(req,res)=>{
    const product = await Product.findById(req.params.id).populate('reviews');
    res.json(product);
    
})

//getting product to edit

router.get('/products/:id/edit',async(req,res)=>{
    const product =await Product.findById(req.params.id)
    res.json(product)
})
router.patch('/products/:id',async(req,res)=>{
    const product =await Product.findByIdAndUpdate(req.params.id,req.body)
    res.json(product)
})
router.delete('/products/:id',async(req,res)=>{
    await Product.findByIdAndDelete(req.params.id,req.body)
    res.json("deleted")
})

router.post('/products/:id/review',async(req,res)=>{
    // console.log(req.body);
    try{
       const product= await Product.findById(req.params.id)
       const review=new Review({
           ...req.body
       })
       product.reviews.push(review);
       await product.save();
       await product.save();
       res.status(200).json(product);
    }
    catch(e){
       res.send("error while creating review")
    }
  ;

})
module.exports=router;