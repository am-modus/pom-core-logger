const POMLogger = require('./index');

const logger = new POMLogger('splunkLogger');
if (logger) {
    logger.log('Say Hello');
}
