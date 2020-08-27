import { MikroORM } from "@mikro-orm/core";
import { __pass__, __prod__ } from "./constants";

const main = async () => {
	const orm = await MikroORM.init({
		dbName: 'lireddit',
		user: 'postgres',
		password: __pass__,
		type: 'postgresql',
		debug: !__prod__
	});
};


console.log( 'Hello world' );