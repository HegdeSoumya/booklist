const express = require('express');

const Locals = require('./locals');
const Routes = require('./routes');
const Http = require('../middlewares/Http');

class Express {

    constructor() {
        this.express = express();
        this.mountMiddlewares();
        this.mountDotEnv();
        this.mountRoutes();
    }

    mountDotEnv() {
        this.express = Locals.init(this.express);
    }

    mountMiddlewares() {
        this.express = Http.init(this.express);
    }

    mountRoutes() {
        this.express = Routes.mountApi(this.express);
    }

    init() {
        const { port, url } = Locals.config();
        this.express.listen(port, () => {
            return console.log(`Server :: Running @ ${url}`);
        });
    }
}

module.exports = new Express();