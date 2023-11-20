import { Logger, ILogObj } from 'tslog';
import { ILogger } from './logger.interface';
import { injectable } from 'inversify';
import 'reflect-metadata';

@injectable()
export class LoggerService implements ILogger {
	public logger: Logger<ILogObj>;

	constructor() {
		this.logger = new Logger<ILogObj>({
			name: 'mylogger',
			type: 'pretty',
			prettyLogTemplate: '{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}}\t{{logLevelName}}\t',
			prettyErrorTemplate: '\n{{errorName}} {{errorMessage}}\nerror stack:\n{{errorStack}}',
		});
	}

	log(...args: unknown[]): void {
		this.logger.info(...args);
	}

	error(...args: unknown[]): void {
		// send it to Telegram or elsewhere
		this.logger.error(...args);
	}
	warn(...args: unknown[]): void {
		this.logger.warn(...args);
	}
	silly(...args: unknown[]): void {
		this.logger.silly(...args);
	}
}
