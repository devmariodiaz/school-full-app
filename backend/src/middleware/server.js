const express = require('express');
const app = express();
const db = require('../models/index.model');
const helmet = require('helmet');

const start = (port) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static("public"));
    app.use(helmet());

    console.clear();

    app.listen(port, () => {
        console.log(`Server has been started on port ${port}`);
        dbConnect();
    });

    app.get('/', (req, res) => {
        res.json({ message: 'Welcome to the School App'});
    });
}

const dbConnect = () => {
    db.mongoose.connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(() => {
        console.log("Connected to the database");
    }).catch(err => {
        console.log("Cannot connect to the database", err);
        process.exit();
    });
}


module.exports = { start, app };