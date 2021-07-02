const db = require('../models/index.model');
const response = require('../utils/response');

const IdentificationType = db.identificacionType;

const create = (req, res) => {
    let payload = req.body;

    if(!payload.description) {
        response.error(req, res, "Description cannot be empty!", 401);
        return;
    }

    const identificacionType = new IdentificationType({
        description: payload.description
    });

    identificacionType.save(identificacionType).then(data => {
        response.success(req, res, data, 200);
    })
    .catch(err => {
        let message = err.message || "Some error occurred while creating the IdentificationType."
        response.error(req, res, message, 500);
    });
}

const findAll = (req, res) => {
    IdentificationType.find({})
        .then(data => {
            response.success(req, res, data, 200);
        })
        .catch(err => {
            let message = err.message || "Some error occurred while fetching IdentificationType table"
            response.error(req, res, message, 500);
        });
}


module.exports = {
    create,
    findAll
}