const fs = require('fs');

const loggersAvailable = fs.readdirSync('loggers');

class POMLogger {
    constructor(type) {
        if (!type) {
            const err = `You must specify a ${type} of POMLogger`;
            throw err;
        }

        const typeOfLogger = type.trim().toLowerCase();
    }
}
