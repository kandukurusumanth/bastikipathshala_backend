require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db.js');
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
const apirouter = require('./routers/index.js');

app.use('/api',apirouter)
const PORT = process.env.PORT || 3000
connectDB().
then(()=>{
    console.log("mongodb connection is done")
    app.listen(PORT,()=>{
    console.log("listening on the port:",PORT)
    })

})
.
catch((error)=>{
    console.log('error has occured connecting to mongodb',error)
    process.exit(1)
})