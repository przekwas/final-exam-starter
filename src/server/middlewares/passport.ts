// import * as passport from 'passport';
// import * as PassportLocal from 'passport-local';
// import * as PassportJWT from 'passport-jwt';
// import * as jwt from 'jsonwebtoken';
// import { comparePasswords } from '../utils/bcrypt';
// import db from '../db';
// import config from '../config';

// passport.serializeUser((user, done) => done(null, user));
// passport.deserializeUser((user, done) => done(null, user));

// passport.use(
// 	new PassportLocal.Strategy({ usernameField: 'email' }, async (email, password, done) => {
// 		try {
// 			const userFound = await db.uses.find('email', email);

// 			// if no user is found
// 			if (!userFound || !userFound.length) {
// 				throw new Error('invalid email or password');
// 			}

// 			// if password does not match
// 			if (comparePasswords(password, userFound.password)) {
// 				throw new Error('invalid email or password');
// 			}

// 			delete userFound.password;
// 			done(null, userFound);
// 		} catch (error) {
// 			done(error);
// 		}
// 	})
// );

// passport.use(
// 	new PassportJWT.Strategy(
// 		{
// 			secretOrKey: config.jwt.secret,
// 			jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken()
// 		},
// 		(payload, done) => {
// 			done(null, payload);
// 		}
// 	)
// );
