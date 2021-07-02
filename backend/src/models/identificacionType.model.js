module.exports = mongoose => {
    return mongoose.model("identificationTypes", 
        mongoose.Schema({
            description: {
                type: String,
                required: true
            }
        },
        { timestamps: true })
    );
}