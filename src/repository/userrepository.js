const {User} = require('../models/index')
const crudrepository = require('./crudrepository.js')
class userrepository extends crudrepository{
    constructor(){
        super(User)
    }
    async findByEmail(data){
        try {
            const user_data = await User.findOne({email:data.email})
            console.log(user_data, "this is fromt the repo layer")
            if(!user_data){
                const error = new Error('Email not found move to the Signup')
                error.statusCode = 404
                throw error
            }
            return user_data
        } catch (error) {
            throw error
        }
    }
}
module.exports=userrepository