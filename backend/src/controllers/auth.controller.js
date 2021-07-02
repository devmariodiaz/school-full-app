const db = require('../models/index.model');
const response = require('../utils/response');
const bcrypt = require('bcrypt');
const validator = require('validator');
const jwt = require('../auth/jwt')

const User = db.user;

const signin = (req, res) => {
    let { username, password } = req.body;

    if(!username || !password) {
        response.error(req, res, "Username and Password should be provided");
        return;
    }

    User.findOne({username: username})
    .then(data => {
        if(data) {
            const validPassword = bcrypt.compareSync(password, data.password);
            
            if(validPassword) {
                const token = jwt.generate({ username: data.username});
                console.log(token);
                response.success(req, res, token, 200);
            }
            else {
                response.error(req, res, "Username or Password provided are invalid", 401);
            }
        }
        else {
            response.error(req, res, "Username or Password provided are invalid", 401);
        }
    }).
    catch(err => {
        let message = err.message || "Some error occurred."
        response.error(req, res, message, 500);
    });
}

const create = async(req, res) => {
    let { username, password, email } = req.body;
    const saltRounds = 10;

    if(!username || !password || !email) {
        response.error(req, res, "Username, Email and Password cannot be empty!", 400);
        return;
    }

    if(!validator.isEmail(email)) {
        response.error(req, res, "email should have a correct format like to foo@domain.com");
        return;
    }

    let foundByUsername = await findBy({ username: username });
    let foundByEmail = [];

    if(foundByUsername.length == 0) {
        foundByEmail = await findBy({ email: email });
        console.log(foundByEmail);
    }

    if(foundByUsername.length > 0 || foundByEmail.length > 0) {
        response.error(req, res, "Username or Email already exists in database", 500);
        return;
    }

    const salt = bcrypt.genSaltSync(saltRounds);
    const encryptedPassword = await bcrypt.hash(payload.password, salt);

    const user = new User({
        username: payload.username,
        password: encryptedPassword,
        email: payload.email
    });

    user.save(user)
        .then(data => {
            const prepareResponse = {
                    _id: data._id,
                    username: data.username,
                    email: data.email,
                    createdAt: data.createdAt,
                    updatedAt: data.updatedAt
            }

            response.success(req, res, prepareResponse, 200);
        })
        .catch(err => {
            let message = err.message || "Some error occurred while creating the User."
            response.error(req, res, message, 500);
        });
}

const update = async(req, res) => {
    
}

const deleteOne = async(req, res) => {
    
}

const findAll = async(req, res) => {
    
}

const findOne = async(req, res) => {
    
}

const findBy = async(payload) => {
    return User.find(payload);
}

module.exports = {
    signin,
    create,
    update,
    findAll,
    findOne,
    deleteOne
}