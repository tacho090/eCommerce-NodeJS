const winston = require('winston');
// const moment = require('moment');
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf, prettyPrint } = format;
const path = require('path');
const logPath = __dirname;
const tsFormat = () => (new Date().toISOString());


const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

const errorLog = createLogger({
    level: 'error',
    format: combine(
        label({ label: 'errorLog' }),
        timestamp(),
        myFormat
    ),
    transports: [
        new winston.transports.File({
            filename: path.join(logPath, 'errors.log'),
            timestamp: tsFormat,
            level: 'info'
        })
    ]
});

const accessLog = createLogger({
    level: 'info',
    format: combine(
        label({ label: 'accessLog' }),
        // timestamp(),
        prettyPrint(),
        // myFormat,
    ),
    defaultMeta: { service: 'winston log info-level' },
    transports: [
        new transports.File({
            filename: path.join(logPath, '/logs/access.log'),
            'timestamp': true,
            timestamp: tsFormat,
            level: 'info'
        })
    ]
});


module.exports = {
    errorLog: errorLog,
    accessLog: accessLog
};