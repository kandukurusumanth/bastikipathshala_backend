const bcrypt = require('bcryptjs');

async function createhashpassword(data) {
    const {password,...user_data} = data
    const salt = bcrypt.genSaltSync(10);
    return await  bcrypt.hash(password,salt)
}
async function comparepassword(password,hashpassword) {
    
    return await bcrypt.compare(password, hashpassword);
}
module.exports={
    createhashpassword,
    comparepassword
}