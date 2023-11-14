import express, {Express} from 'express';
import {Server} from 'http';
import { LoggerService } from './logger/logger.service.js';
import { UserController } from './users/users.controller.js';
import { ExceptionFilter } from './errors/exception.filter.js';
import { ILogger } from './logger/logger.interface.js';
import { inject, injectable } from 'inversify';
import { TYPES } from './types.js';
import 'reflect-metadata';

@injectable()
export class App {
	app: Express;
	server: Server;
	port: number;

	constructor(
		@inject(TYPES.ILogger) private logger: ILogger,
		@inject(TYPES.UserController) private userController: UserController,
		@inject(TYPES.ExceptionFilter) private exceptionFilter: ExceptionFilter,
		) {
		this.app = express();
		this.port = 8000;
	};

	useRoutes() {
		this.app.use('/users', this.userController.router);
	}

	useExceptionFilters() {
		this.app.use(this.exceptionFilter.catch.bind(this.exceptionFilter));
	}

	public async init() {
		// 1) middlewares, 2) routes, 3)exception filters
		this.useRoutes();
		this.useExceptionFilters();
		this.server = this.app.listen(this.port);
		this.logger.log(`Server is running at http://localhost:${this.port}`);
	}
}


