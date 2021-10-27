import log4js from 'log4js';

export const loggerProduct = () => {
    log4js.configure({
      appenders: {
        loggerWarn: { type: 'file', filename: './logs/warn.log' },
        loggerError: { type: 'file', filename: './logs/error.log' },
        loggerConsole: { type: 'console' },
      },
      categories: {
        default: { appenders: ['loggerConsole'], level: 'info' },
        fileWarn: { appenders: ['file'], level: 'warn' },
        fileError: { appenders: ['file'], level: 'error' },
      },
    });
};