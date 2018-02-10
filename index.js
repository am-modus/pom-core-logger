const fs = require('fs');

const loggersAvailable = fs.readdirSync('loggers');
for (let i = 0; i < loggersAvailable.length; i++) {
    loggersAvailable[i] = loggersAvailable[i].replace('.js', '');
}

class POMLogger {
    constructor(type) {
        if (!type) {
            const err = `You must specify a ${type} of POMLogger`;
            throw err;
        }

        const typeOfLogger = type.trim().toLowerCase();
    }
}
