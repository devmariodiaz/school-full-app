const student = require('./student.route');
const user = require('./auth.route');
const catalogs = require('./catalogs.route');
const jwt = require('../auth/jwt');

const routes = (app) => {
    app.use('/api/student', jwt.verify, student);
    app.use('/api/auth', user);
    app.use('/api/catalogs', jwt.verify, catalogs);
}

module.exports = routes;