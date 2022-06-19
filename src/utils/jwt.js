import envs from './envs';
import jwt from 'jsonwebtoken';
import { TOKEN_EXPIRATION } from '../constants/jwt';

export function generateAccessToken(payload) {
  return jwt.sign(payload, envs.accessTokenSecret, {
    expiresIn: TOKEN_EXPIRATION,
  });
}
