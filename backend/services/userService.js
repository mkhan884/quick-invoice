const passwordHelper = require('../helpers/passwordHelper');
const jwt = require ('jsonwebtoken')

exports.registerUser = async (db, userInfo) => {
    const {email, password} = userInfo;
    const hashedPassword = await passwordHelper.createHash(password);

    return new Promise((resolve, reject) => {
        db.query("INSERT INTO user (email, password) VALUES(?, ?)", [email, hashedPassword], (err, result) =>{
            if(err){
                return reject(err)
            }
            resolve(result)
        })
    })
}

exports.loginUser = async (db, userInfo) => {
    const {email, password} = userInfo
    return new Promise((resolve, reject)=>{
        db.query("SELECT email, password FROM user WHERE email = ?", [email], async (err, result) =>{
            if(err){
                return reject(err)
            }
            const hashedPassword = result[0].password
            const passwordMatch = await passwordHelper.verify(password, hashedPassword)
            if(!passwordMatch){
                return reject(err)
            }
            const token = jwt.sign(
                process.env.KEY
            )
            resolve(token);
        })
    })
}