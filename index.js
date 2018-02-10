const fs = require('fs');

const loggersAvailable = fs.readdirSync('loggers');
for (let i = 0; i < loggersAvailable.length; i++) {
    loggersAvailable[i] = loggersAvailable[i].replace('.js', '').trim();
}

class POMLogger {
    constructor(type) {
        // type of logger needed is not specified, throw an error
        if (!type) {
            const err = `You must specify the type of POMLogger you want to use. Current types include: ${loggersAvailable}`;
            throw err;
        }

        // check if the type of logger requested is in fact available
        const typeOfLogger = type.trim().toLowerCase();
        let whichLogger = null;

        for (let i = 0; i < loggersAvailable.length; i++) {
            const logger = loggersAvailable[i].toLocaleLowerCase();
            if (logger === typeOfLogger) {
                whichLogger = i;
                break;
            }
        }

        // if whichLogger == null, then the type of logger requested was not found
        if (whichLogger === null) {
            const err = 'Type of logger requested does not exist';
            throw err;
        } else {
            const loggerName = `./loggers/${loggersAvailable[whichLogger]}`;
            const LoggerClass = require(loggerName);
            return new LoggerClass();
        }
    }
}

module.exports = POMLogger;
