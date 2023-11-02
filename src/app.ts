import express, {Express} from 'express';
import { userRouter } from './users/users.js';
import {Server} from 'http';
import { LoggerService } from './logger/logger.service.js';

export class App {
	app: Express;
	server: Server;
	port: number;
	logger: LoggerService;

	constructor(logger: LoggerService) {
		this.app = express();
		this.port = 8000;
		this.logger = logger;
	}

	useRoutes() {
		this.app.use('/users', userRouter);
	}

	public async init() {
		// 1) middlewares, 2) routes, 3)exception filters
		this.useRoutes();
		this.server = this.app.listen(this.port);
		this.logger.log(`Server is running at http://localhost:${this.port}`);
	}
}


