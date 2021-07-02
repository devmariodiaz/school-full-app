const validator = require('validator');

module.exports = mongoose => {
    return mongoose.model("user",
            mongoose.Schema({
                username: { 
                    type: String, 
                    required: true
                },
                email: { 
                    type: String, 
                    required: true,
                    lowercase: true,
                    validate: (value) => validator.isEmail(value)
                },
                password: { 
                    type: String, 
                    required: true 
                }
            })
    );
}