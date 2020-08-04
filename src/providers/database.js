const mongoose = require('mongoose');
const bluebird = require('bluebird');
const Locals = require('./locals');

class Database {

    init() {
        const dsn = Locals.config().mongooseUrl;
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            connectTimeoutMS: 10000
        };
        mongoose.Promise = bluebird;
        mongoose.connect(dsn, options, error => {
            if (error) {
                console.log(error);
                throw error;
            } else {
                console.info('connected to mongo server at: ' + dsn);
            }
        });
        mongoose.set('useCreateIndex', true);
    }
}

module.exports = new Database();