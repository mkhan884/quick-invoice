const userService = require ('../services/userService')

exports.registerUser = async (req, res) => {
    try{
        await userService.registerUser(req.db, req.body)
        return res.status(200).send({message: "Successfully created a new user."})
    }
    catch (err){
        return res.status(500).send({error: "Unable to create a new user."})
    }
}

exports.loginUser = async (req, res) => {
    try{
        const token = await userService.loginUser(req.db, req.body)
        return res.status(200).send({message: "Successfully logged in.", token})
    }
    catch (err){
        return res.status(500).send({error: "Unable to login."})
    }
}