import envs from './envs';
import jwt from 'jsonwebtoken';
import { ONE_DAY } from '../constants/date';

export function signAccessToken(payload) {
  return jwt.sign(payload, envs.accessTokenSecret, {
    expiresIn: ONE_DAY,
  });
}

export function verifyToken(token) {
  const payload = jwt.verify(token, envs.accessTokenSecret);

  return payload;
}

export function getTokenFromCookie(req) {
  const { accessToken } = req.cookies;

  return accessToken || null;
}
