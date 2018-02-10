const BaseLogger = require('../baseLogger');

class NewRelicLogger extends BaseLogger {
    constructor() {
        super('NewRelicLogger');
    }

    log(message) {
        console.log(this.name, '--->', message);
    }
}

module.exports = NewRelicLogger;
