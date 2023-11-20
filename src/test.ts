// let a: number = 5;
// let b: string = '4';

// let c: number = a + Number(b);

// let d = true;

// let names: string[] = ['sd', 'fdfg'];
// let ages: number[] = [12, 35];

// let tup: [number, string] = [2, 'e']; 		// tuple
// tup.push('2');

// let e: any = 3;
// e = 'sd';
// e = true;

// let anyArray: any[] = ['sd', 2, true];

// function greet(name: string): string {
// 	return name + 'hi';
// }

// names.map((x: string) => x);

// function coord(coord: {lat: number, long?: number}) {
// 	coord.long = undefined;
// 	// coord.lat = undefined;
// };

// let universalId: number | string = 5;		//union type
// universalId = 'edfg';

// function printId(id: number | string) {
// 	if (typeof(id) == 'string'){
// 		console.log(id.toUpperCase);
// 	} else {
// 		console.log(id);
// 	}
// };

// function helloUser(user: string | string[]) {
// 	if (Array.isArray(user)) {
// 		console.log(user.join(', ') + 'Hi!');
// 	}
// 	else {
// 		console.log(user + 'Hi!');
// 	}
// };

// type coord = {lat: number, long: number};

// interface ICoord {
// 	lat: number;
// 	long: number;
//  };

//  type ID = number | string;
//  type myString = string;

// function compute(coord: ICoord) {

// };

// interface Animals {
// 	name: string;
// }

// interface Dog extends Animals {
// 	tail?: boolean;
// }

// const dog: Dog = {
// 	name: "dfg",
// 	tail: true
// }

// type Animal = {
// 	name: string
// }

// type Dog = Animal & {
// 	tail: number
// }

// const dog: Dog = {
// 	name: 'dffg',
// 	tail: false
// }

// interfaces can be reassigned and merged
// types not

// const as = 'dffg'; 	// literal type
// // as = 'dfg';

// let bs: 'hi' = 'hi';

// type direction = 'left' | 'right';

// function moveDog(direction: direction): -1 | 1 |0  {
// 	switch (direction){
// 		case 'left':
// 			return -1;
// 		case 'right':
// 			return 1;
// 		default:
// 			return 0;
// 	}
// };

// const connection = {
// 	host: 'localhost',
// 	protocol: 'https' as 'https'
// };

// function connect(host: string, protocol: 'http' | 'https') {

// };

// let aa: any = 5;

// // explicit type casting
// let cc: number = aa as number;

// // the same as above, but not recommended because it's invalid in JSX
// let ccc: number = <number>aa;

// connect (connection.host, connection.protocol);

// //-------------------------------------------------------------------------------

// // union type
// type newDirection = 'left' | 'right';

// //enum compiles to a function in js
// enum wowDirection {
// 	Left,
// 	Right
// };

// function move(direction: wowDirection) {
// 	switch (direction){
// 		case wowDirection.Left:
// 			return -1;
// 		case wowDirection.Right:
// 			return 1;
// 	}
// }

// function objMod(obj: {Left: number}) {

// }
// objMod(wowDirection);

// // const enum is just const, not a function
// const enum Direction2 {
// 	Up,
// 	Down
// }

// let myDirection = Direction2.Up;

// // Generics -------------------------------------------------
// interface HasLength {
// 	length: number;
// }

// function log<T extends HasLength, K>(obj: T, arr: K[]): K[] {
// 	arr.length;		// arr has this property by default as array
// 	obj.length;		// obj has this property because it is extended from HasLength
// 	console.log(obj);
// 	return arr;
// }

// log<string, number>('abc', [1]);

// interface IUser {
// 	name: string;
// 	age?: number;
// 	bid: <T>(sum: T) => boolean;
// }

// function bid<T>(sum: T): boolean {
// 	return true;
// }

// // Classes ----------------------------------------

// class Coord {
// 	lat!: number
// }

// interface LoggerService {
// 	log: (s: string) => void;
// };

// class Logger implements LoggerService {
// 	public log(s: string) {
// 		console.log(s);
// 	};

// 	private error(){

// 	}

// 	protected a = 5;

// };

// const l = new Logger();
// l.log('s');
// //l.error();
// // l.a = 6;

// abstract class Base {
// //	f: number;
// };

// // new Base();

// //----------------------------------------------------------
// import express, {Request, Response, NextFunction} from 'express';
// import {userRouter} from './users/users.js';

// // const host = '127.0.0.1';
// const port = 8000;
// const app = express();

// app.use((req, res, next)=>{
// 	console.log('Time:', Date.now());
// 	next();
// })

// app.get ('/hello', (req, res) => {
// 	// res.set('Content-Type', 'text/plain');
// 	// res.append('Warning', 'code')
// 	// res.type('application/json');
// 	// res.cookie('token', 'dfghdghfg', {
// 	// 	domain: '',
// 	// 	path: '/',
// 	// 	secure: true
// 	// 	expires: new Date()
// 	// });
// 	// res.clearCookie('token');
// 	// res.send('Hello');
// 	// res.location();
// 	// res.links();
// 	// res.download('/test.pdf', 'tesssst.pdf');
// 	//res.redirect(301,'https://example.com');
// 	// res.status(201).send({success: true});
// 	// res.status(404).end();
// 	throw new Error('Error!!!');
// })

// app.use('/users', userRouter);

// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
// 	console.log(err.message);
// 	res.status(401).send(err.message);
// });

// app.listen(port, () => {
// 	console.log(`Server is running at http://localhost:${port}`);
// });

// app.all('/hello', (req, res,next) => {
// 	console.log('All');
// 	next();
// });

// const cb = (req, res, next) => {
// 	console.log('CB');
// 	next();
// };

// app.route('/user')
// 	.get('/hello', (req, res) => {
// 		res.send('Hello');
// 	})
// 	.post('/hello', (req, res) => {
// 		res.send('Hello POST');
// 	});

// app.listen(port, () => {
// 	console.log(`Server is running at http://localhost:${port}`);
// });

// Decorators---------------------------------
// function Component(id: number){
// 	console.log('init component');
// 	return (target: Function) => {
// 		console.log('run component');
// 		target.prototype.id = id;

// 	}
// }
// function Logger(){
// 	console.log('init logger');
// 	return (target: Function) => {
// 		console.log('run logger');
// 	}
// }

// function Method(target: Object, propertyKey: string, propertyDescriptor: PropertyDescriptor) {
// 	console.log(propertyKey);
// 	//const oldValue = propertyDescriptor.value;
// 	propertyDescriptor.value = function (...args: any[]){
// 		return args[0] * 10;
// 		//oldValue();
// 	}
// }
// function Prop(target: Object, propertyKey: string){
// 	let value: number;
// 	const getter = () => {
// 		console.log('Get!');
// 		return value;
// 	}
// 	const setter = (newValue:number) => {
// 		console.log('Set!');
// 		value = newValue;
// 	}

// 	Object.defineProperty(target, propertyKey, {
// 		get: getter,
// 		set: setter
// 	})
// }

// function Param(target: Object, propertyKey: string, index: number){
// 	console.log(propertyKey, index);

// }

// @Logger()
// @Component(1)
//  export class User {
// 	@Prop id: number;

// 	@Method
// 	updateId(@Param newId:number) {
// 		this.id = newId;
// 		return this.id;
// 	}
//  }

// console.log(new User().id);
// console.log(new User().updateId(2));

////Reflect metadata-------------------

// import 'reflect-metadata';

// function Injectable(key: string) {
// 	return (target: Function) =>{
// 		Reflect.defineMetadata(key, 1, target);
// 		const meta = Reflect.getMetadata(key, target);
// 		console.log(meta);
// 	}
// }

// function Inject(key: string) {
// 	return (target: Function) =>{
// 		Reflect.defineMetadata(key, 1, target);
// 		const meta = Reflect.getMetadata(key, target);
// 		console.log(meta);
// 	}
// }

// function Prop(target: Object, name: string) {

// }

// @Injectable('C')
// export class C {
// 	@Prop prop: number;
// }
// @Inject('D')
// export class D {
// 	constructor(@Inject('C') c:C) {}
// 	@Prop prop: number;
// }
