const router = require('express').Router()
const userrouter = require('./userrouter.js')
router.use('/user',userrouter)
module.exports=router