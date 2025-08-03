const { usercontroller } = require('../../controllers')
const authmiddleware = require('../../middlewares/authmiddleware')
const validationerrors = require('../../middlewares/validaitonresults')
const { user_validation } = require('../../utils')

const router = require('express').Router()
router.post('/signup',user_validation.registervalidation,validationerrors,usercontroller.createnewusercontroller)
router.get('/',   authmiddleware,usercontroller.getalluserservice)
router.post('/login',user_validation.loginvalidation,validationerrors,usercontroller.logincontroller)
module.exports=router