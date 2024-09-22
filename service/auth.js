const jwt = require('jsonwebtoken');
const secret = "Nandani@123";

function setUser(user){
    return jwt.sign(user, secret);
}

function getUser(id, user){
    if(!token){
        return null;
    }
   return jwt.verify(token, secret);
}

module.exports = {
    setUser,
    getUser,
}