import { verifyToken } from '../utils/jwt';
import { StatusCodes } from 'http-status-codes';

export async function authenticate(req, res, next) {
  const { cookies } = req;
  if (!cookies || !cookies.accessToken) {
    return res.sendStatus(StatusCodes.UNAUTHORIZED);
  }

  try {
    const payload = verifyToken(cookies.accessToken);
    req.payload = payload;

    return next();
  } catch (error) {
    return res.status(403).json(error.message);
  }
}
