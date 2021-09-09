const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product =require('./models/product')
const seedDB = require('./seed');
const productRoutes=require('./routes/productRoutes');
mongoose.connect('mongodb://localhost:27017/shopping-app', 
{ 
    useNewUrlParser: true, 
    useFindAndModify:false,
    useCreateIndex:true,
    useUnifiedTopology: true 
}).then(()=>console.log("DBConnected"))
.catch((err)=>console.log(err));
// seedDB()
app.use(express.json());
app.use(productRoutes);




app.get('/hello',(req,res)=>{
    res.status(200).send("Hello From Server");
})










app.listen(3003, () => {
    console.log("Server started at port 3003");
})
