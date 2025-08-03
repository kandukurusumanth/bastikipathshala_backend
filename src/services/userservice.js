const {userrepository }=require("../repository/index.js")
const { comparepassword } = require("../utils/bcryptutils.js")
const { jwtutils, bcryptutils } = require("../utils/index.js")
const userservice = new userrepository()
async function createnewuserservice(data) {
    try {
        console.log(data)
        data.password = await bcryptutils.createhashpassword(data)
        const user = await userservice.create(data)
        console.log(user)
        if(user){
            return jwtutils.createtoken(user)
        }
        const error = new Error('Unable to create User')
        throw error
        
        
    } catch (error) {
        if (error.code === 11000){
            const error = new Error('Email already in use')
            error.statusCode = 400
            throw error
            
        }
        throw error
    }
}
async function loginservice(data) {
    try {
        const login_details =  await userservice.findByEmail(data)
        let isvalid = await bcryptutils.comparepassword(data.password,login_details.password)
        if(isvalid){
            return jwtutils.createtoken(login_details)
        }
        const error = new Error('email and password does not match')
        error.statusCode= 401
        throw error
    } catch (error) {
        throw error
    }
}
async function getalluserservice(data) {
    
    try {
        console.log(data.role)
        if(data.role!=='ADMIN'){
            const error = new Error('Client does not have the required permissions to access')
            error.statusCode=403
            throw error
        }
        const allusers = await userservice.getAll()
        return allusers
    } catch (error) {
        throw error
    }
}
module.exports={
    createnewuserservice,
    getalluserservice,
    loginservice
}