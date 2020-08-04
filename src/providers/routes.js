const Locals = require('./locals');
const BookRouter = require('../../src/apis/bookRouter');

class Routes {

    mountApi(_express) {
        const apiPrefix = Locals.config().apiPrefix;
        _express.use(`/${apiPrefix}`, BookRouter);

        return _express;
    }
}

module.exports = new Routes();