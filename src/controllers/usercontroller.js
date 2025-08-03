const { userservice } = require("../services/index.js");

async function createnewusercontroller(req,res) {
    try {
        const user = await userservice.createnewuserservice(req.body)
        return res.status(201).json(user)
    } catch (error) {
        error_message = error.message || error
        statusCode = error.statusCode || 500
        return res.status(statusCode).json({error:error_message})
        
    }
}
async function logincontroller(req,res) {
    try {
        const user = await userservice.loginservice(req.body)
        return res.status(200).json(user)

    } catch (error) {
        const error_message = error.message || error
        const statusCode = error.statusCode || 500
        return res.status(statusCode).json({error:error_message})
    }
}
async function getalluserservice(req,res) {
    try {
        const user = await userservice.getalluserservice(req.body)
        return res.status(200).json(user)
    } catch (error) {
        const error_message = error.message || error
        const statusCode = error.statusCode || 500
        return res.status(statusCode).json({error:error_message})
    }
}
module.exports={
    createnewusercontroller,
    getalluserservice,
    logincontroller
}