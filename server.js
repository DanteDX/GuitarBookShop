const express = require('express');
const connectDB = require('./config/db.js');
const path = require('path'); // for production

const app = express();
connectDB();
app.use(express.json({extended:false}));

app.use('/customer/',require('./routes/placeOrders'));
app.use('/admin',require('./routes/admin'));

if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server  is runnig on ${PORT}`));