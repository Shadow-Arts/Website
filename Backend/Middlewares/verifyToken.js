const jwt = require("jsonwebtoken")

const verifyToken = ( req, res, next) =>{
    const bearerToken = req.headers.authorization;
    if(!bearerToken){
        res.send({message:"Unauthorized request"})
    }
    else{
        const token = bearerToken.split(' ')[1]
        console.log(token)
        try{
            let decodedToken = jwt.verify(token,'artsapp')
            req.user = decodedToken
            next()
        }
        catch(err){
            res.send({message:err.message})
        }
    }
}

module.exports = verifyToken