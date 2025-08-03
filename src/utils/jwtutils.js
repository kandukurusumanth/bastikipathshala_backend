const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET; // Store securely in environment variables
function createtoken(user){
    const payload = {
        id: user._id,
        email: user.email,
        role: user.role,
        name:user.name
    };

    console.log(typeof payload,"this is the payload")
    return {token:jwt.sign(payload,secretKey,{expiresIn:'1h'})}
}
function verifytoken(data){
    return jwt.verify(data,process.env.JWT_SECRET)
}
module.exports={
    createtoken,
    verifytoken
}