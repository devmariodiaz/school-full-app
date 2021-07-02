module.exports = mongoose => {
    return mongoose.model("user",
            mongoose.Schema({
                username: { 
                    type: String, 
                    required: true
                },
                email: { 
                    type: String, 
                    required: true
                },
                password: { 
                    type: String, 
                    required: true 
                }
            })
    );
}