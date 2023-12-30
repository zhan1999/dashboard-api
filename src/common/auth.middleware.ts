import { Request, Response, NextFunction } from 'express';
// import { ParamsDictionary } from 'express-serve-static-core';
// import { ParsedQs } from 'qs';
import { IMiddleware } from './middleware.interface';
import { verify, JwtPayload } from 'jsonwebtoken';

export class AuthMiddleware implements IMiddleware {
	constructor(private secret: string) {}

	execute(
		// req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
		// res: Response<any, Record<string, any>>,
		req: Request,
		res: Response,
		next: NextFunction,
	): void {
		if (req.headers.authorization) {
			// req.headers.authorization.split(' ')[1];
			verify(req.headers.authorization.split(' ')[1], this.secret, (err, payload) => {
				if (err) {
					next();
					// eslint-disable-next-line valid-typeof
				} else if (payload && typeof payload !== 'string') {
					req.user = payload.email;
					next();
				}
			});
		}
		next();
	}
}
