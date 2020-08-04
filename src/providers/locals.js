const path = require('path');
const dotenv = require('dotenv');

class Locals {

    config() {
        dotenv.config({ path: path.join(__dirname, '../../.env') });

        const url = process.env.APP_URL || `http://localhost:${process.env.PORT}`;
        const port = process.env.PORT || 3000;
        const appSecret = process.env.APP_SECRET || 'This is your responsibility!';
        const mongooseUrl = process.env.MONGOOSE_URL;
        const maxUploadLimit = process.env.APP_MAX_UPLOAD_LIMIT || '50mb';
        const maxParameterLimit = process.env.APP_MAX_PARAMETER_LIMIT || '50mb';

        const name = process.env.APP_NAME || 'NodeJS Dashboard';
        const keywords = process.env.APP_KEYWORDS || 'somethings';
        const year = new Date().getFullYear();
        const copyright = `Copyright ${year} ${name} | All Rights Reserved`;
        const company = process.env.COMPANY_NAME || 'Nineleaps';
        const description = process.env.APP_DESCRIPTION || 'Here goes the app description';

        const isCORSEnabled = process.env.CORS_ENABLED || true;
        const jwtExpiresIn = process.env.JWT_EXPIRES_IN || 3;
        const apiPrefix = process.env.API_PREFIX || 'api';
        const apiKey = process.env.API_KEY;

        const logDays = process.env.LOG_DAYS || 10;

        return {
            apiPrefix,
            apiKey,
            description,
            isCORSEnabled,
            jwtExpiresIn,
            keywords,
            logDays,
            maxUploadLimit,
            maxParameterLimit,
            mongooseUrl,
            name,
            port,
            url
        };
    }

    init(_express) {
        _express.locals.app = this.config();
        return _express;
    }
}

module.exports = new Locals();