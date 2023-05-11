const jwt = require("jsonwebtoken");

module.exports = (req, res, next)=>{
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.sign(token, process.env.SECRET_TOKEN_KEY);
        next();
    } catch (error) {
        res.status(401).json({
            status: "Failed",
            message: "auth failed"
        })
    }
}