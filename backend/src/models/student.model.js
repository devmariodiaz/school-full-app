module.exports = mongoose => {
    return mongoose.model("student", 
            mongoose.Schema({
                firstName: { type: String, required: true },
                lastName: { type: String, required: true },
                birthdate: Date,
                identificationNumber: { type: String, required: true },
                identificationType: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'identificationTypes'
                }
            },
            { timestamps: true })
    );
};