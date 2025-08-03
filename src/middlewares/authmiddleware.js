const { verifytoken } = require("../utils/jwtutils");

 async function authmiddleware(req,res,next) {
    try {
        const token = req.headers.authorization?.split(" ")[1]; 
        if(!token){
             return res.status(401).json({ error: "Access token missing or invalid" });
        }
        const verfiy = verifytoken(token)
        if(!verfiy){
            return res.status(401).json({ error: "token expired try to login again" }); 
        } 
        req.body = verfiy
        next()
    } catch (error) {
        return res.status(401).json({error:error.message})
    }
 }
 module.exports=authmiddleware