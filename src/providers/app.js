const Database = require('./database');
const Express = require('./server');

class App {

    constructor() {

    }

    static loadDatabase() {
        Database.init();
    }

    static loadServer() {
        Express.init();
    }
}

module.exports = App;