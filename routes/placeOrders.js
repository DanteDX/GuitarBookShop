const express = require('express');
const router = express.Router();
const PlaceOrder =  require('../model/PlaceOrder');

router.post('/placeOrder',async(req,res)=>{
    const newOrder = new PlaceOrder(req.body);
    try{
        const response = await newOrder.save();
        res.json(response);
    }catch(err){
        console.log(err);
        res.send('Server Error');
    }
    
})

router.get('/placeOrder',async(req,res)=>{
    try{
        const placeOrders = await PlaceOrder.find().sort({_id:-1}) 
        res.json(placeOrders);
    }catch(err){
        console.log(err);
        res.send('server Error');
    }
})

module.exports = router;