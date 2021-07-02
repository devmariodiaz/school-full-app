module.exports = mongoose => {
    return mongoose.model("student", 
            mongoose.Schema({
                firstName: { 
                    type: String, 
                    required: true 
                },
                lastName: { 
                    type: String, 
                    required: true 
                },
                identificationNumber: { 
                    type: String, 
                    required: true 
                },
                identificationType: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'identificationTypes'
                },
                birthdate: Date
            },
            { timestamps: true })
    );
};