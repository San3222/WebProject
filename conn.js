require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.MONGO_DB;

const connectDB = {
    useNewUrlParser:true,
    UseUnifiedTopology: true,
}
mongoose.connect(uri,connectDB)
.then(() =>{
    console.log('databse connection successfull');
}).catch((err) =>{
    console.log('connection error')
})

module.exports = connectDB;

// mongoose.connect(uri,{
//     useNewUrlParser:true,
//     UseUnifiedTopology:true
// }, ()=>{
//     console.log('connect to db')
// });
