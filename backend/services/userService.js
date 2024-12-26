const passwordHelper = require('../helpers/passwordHelper');
const jwt = require ('jsonwebtoken')

exports.registerUser = async (db, userInfo) => {
    const {email, password} = userInfo;
    const hashedPassword = await passwordHelper.createHash(password);

    return new Promise((resolve, reject) => {
        db.query("INSERT INTO users (email, password) VALUES(?, ?)", [email, hashedPassword], (err, result) =>{
            if(err){
                return reject(err)
            }
            resolve()
        })
    })
}

exports.loginUser = async (db, userInfo) => {
    const {email, password} = userInfo
    return new Promise((resolve, reject)=>{
        db.query("SELECT * FROM users WHERE email = ?", [email], async (err, result) =>{
            if(err){
                return reject(err)
            }
            if(result.length === 0){
                return reject()
            }
            const hashedPassword = result[0].password
            const passwordMatch = await passwordHelper.verify(password, hashedPassword)
            if(!passwordMatch){
                return reject(err)
            }
            const token = jwt.sign(
                {id: result[0].id},
                process.env.KEY,
                {expiresIn: '1h'}
            )
            resolve(token);
        })
    })
}