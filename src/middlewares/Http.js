const bodyParser = require('body-parser');

class Http {

    init(_express) {
        _express.use(
            bodyParser.urlencoded({
                extended: true
            })
        );
        _express.use(bodyParser.json());
        return _express;
    }
}
module.exports = new Http();