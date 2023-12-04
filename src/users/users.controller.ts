import { Request, Response, NextFunction } from 'express';
import { BaseController } from '../common/base.controller';
import { HTTPError } from '../errors/http-error.class';
import { injectable, inject } from 'inversify';
import { TYPES } from '../types';
import { ILogger } from '../logger/logger.interface';
import 'reflect-metadata';
import { IUserController } from './users.controller.interface';

class User {}
const users = [];

@injectable()
export class UserController extends BaseController implements IUserController {
	constructor(@inject(TYPES.ILogger) private loggerService: ILogger) {
		super(loggerService);
		this.bindRoutes([
			{ path: '/register', method: 'post', func: this.register },
			{ path: '/login', method: 'post', func: this.login },
		]);
	}

	login(req: Request, res: Response, next: NextFunction): void {
		// this.ok(res, 'login');
		console.log('dfd');
		users.push(new User());
		next(new HTTPError(401, 'Unauthorized', 'login'));
	}

	register(req: Request, res: Response, next: NextFunction): void {
		// data.push(fs.readFileSync(resolve(__dirname, '../../1.mp4')));
		this.ok(res, 'register');
	}
}
