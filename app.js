require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;

//import
const connectDB = require('./conn');
const routes = require('./routes');

//middleware
app.use(express.json());

//middleware
app.use('/api/user', routes );

const startServer = async()=>{
    try {
       await connectDB;
        app.listen(port,() =>{
            console.log(`server is running at port ${port}`);
        })     
    } catch (error) {      
        console.log(error)
    }
}
startServer();
