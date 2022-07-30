import envs from './envs';
import jwt from 'jsonwebtoken';
import { ONE_DAY } from '../constants/date';

export function signAccessToken(payload) {
  return jwt.sign(payload, envs.accessTokenSecret, {
    expiresIn: ONE_DAY,
  });
}

export function verifyToken(token) {
  try {
    const payload = jwt.verify(token, envs.accessTokenSecret);

    return payload;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export function getTokenFromCookie(req) {
  return req.cookies ? req.cookies.accessToken : null;
}
