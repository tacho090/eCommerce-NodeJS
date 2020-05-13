const winston = require('winston');
const {format} = require('logform');
const path = require('path');
const logPath = __dirname;
const tsFormat = () => (new Date().toISOString());

const errorLog = winston.createLogger({
    transports: [
        new winston.transports.File({
            filename: path.join(logPath, 'errors.log'),
            timestamp: tsFormat,
            level: 'info'
        })
    ]
});


const accessLog = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'winston log info-level' },
    transports: [
        new winston.transports.File({
            filename: path.join(logPath, '/logs/access.log'),
            'timestamp': true,
            // timestamp: tsFormat,
            level: 'info'
        })
    ]
});


module.exports = {
    errorLog: errorLog,
    accessLog: accessLog
};