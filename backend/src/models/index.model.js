const dbConfig = require('../config/db.config');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.student = require('./student.model')(mongoose);
db.user = require('./user.model')(mongoose);
db.identificacionType = require('./identificacionType.model')(mongoose);

module.exports = db;