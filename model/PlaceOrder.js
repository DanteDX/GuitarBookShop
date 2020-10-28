const mongoose = require('mongoose');
const PlaceOrderSchema = new mongoose.Schema({
    orderId:String,
    userInfo:{
        username:String,
        email:String
    },
    orderList:[{
        id:String,
        title:String,
        price:Number,
        status:String,
        quantity:Number
    }],
    orderStatus:String
});

module.exports = PlaceOrder = mongoose.model('placeOrder',PlaceOrderSchema);