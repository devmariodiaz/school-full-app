const cors = require('cors');
require('dotenv').config();
const routes = require('./routes/index.route');

const { start, app } = require('./middleware/server');

const server_port = process.env.SERVER_PORT;

start(server_port);
routes(app);

module.exports = app;