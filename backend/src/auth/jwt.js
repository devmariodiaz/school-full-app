const jwt = require('jsonwebtoken');
const response = require('../utils/response')

const generate = user => {
    return jwt.sign(user, process.env.JWT_SECRET_KEY, { expiresIn: '1h'});
}

const verify = (req, res, next) => {    
    const header = req.header('Authorization');
    if(!header) {
        response.error(req, res, 'Bad Request', 400);
    }
    else {
        const token = header.split(' ')[1];

        console.log(token);

        if(!token) {
            return response.error(req, res, 'No token provided', 403);
        }
        
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
            if(err) {
                response.error(req, res, 'Unauthorized', 401);
            }
            next();
        });
        
    }
        
};

module.exports = {
    generate,
    verify
}