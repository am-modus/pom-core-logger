const POMLogger = require('./index');

const splunkLogger = new POMLogger('splunkLogger');
const newRelicLogger = new POMLogger('newRelicLogger');

if (splunkLogger) {
    splunkLogger.log('This is a message by splunk');
}

if (newRelicLogger) {
    newRelicLogger.log('This is a message by new relic');
}
