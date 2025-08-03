async function validationResults(req,res,next) {
    const errors = validationResults(req)
   if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next()
    
}
module.exports=validationResults