const BaseLogger = require('../baseLogger');

class SplunkLogger extends BaseLogger {
    constructor() {
        super('SplunkLogger');
    }

    log(message) {
        console.log(this.name, '--->', message);
    }
}

module.exports = SplunkLogger;
