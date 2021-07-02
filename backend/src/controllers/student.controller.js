const db = require('../models/index.model');
const response = require('../utils/response');

const Student = db.student;

const create = async(req, res) => {
    let payload = req.body;

    if(!payload.firstName || !payload.lastName) {
        response.error(req, res, "Content cannot be empty!", 400);
        return;
    }

    const student = new Student({
        firstName: payload.firstName,
        lastName: payload.lastName,
        birthdate: payload.birthdate,
        identificationNumber: payload.identificationNumber,
        identificationType: payload.identificationType
    });

    student
        .save(student)
        .then(data => {
            response.success(req, res, data, 200);            
        })
        .catch(err => {
            let message = err.message || "Some error occurred while creating the Student."
            response.error(req, res, message, 500);
        });
}

const update = async(req, res) => {

}

const deleteOne = async(req, res) => {

}

const findAll = async(req, res) => {
    Student
        .find({})
        .populate('identificationType')
        .then(data => {
            response.success(req, res, data, 200);
        })
        .catch(err => {
            let message = err.message || "Some error occurred while creating the Student."
            response.error(req, res, message, 500);
        });
}

const findOne = async(req, res) => {
    let params = req.params;
}


module.exports = {
    create,
    update,
    findAll,
    findOne,
    deleteOne
}