const { validationResult } = require("express-validator");

async function validationerrors(req,res,next) {

  const errors = validationResult(req)
  console.log(errors , "this is from the validation ")
   if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next()
    
}
module.exports=validationerrors