require("dotenv").config();
const mongoose = require("mongoose");

const connectDb = mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{console.log('database connected')}).catch((err)=>{console.error('database error',err)});

module.exports = connectDb;
