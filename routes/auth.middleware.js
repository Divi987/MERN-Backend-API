const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.replace("Bearer ", "");
        const decode = jwt.verify(token, process.env.JWT);
        req.userData = decode;
        next();
    }catch(err) {
        return res.status(401).json({message: "Authentication Failed"})
    }
}