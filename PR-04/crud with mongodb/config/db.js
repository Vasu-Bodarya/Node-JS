const mongoose = require('mongoose');

const con = mongoose.connect(`mongodb://localhost/bookstore`);

const db = mongoose.connection;

db.on('connected', (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`successfully`);

})
module.exports = db
