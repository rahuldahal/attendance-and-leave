import { StatusCodes } from 'http-status-codes';
import { getTokenFromCookie, verifyToken } from '../utils/jwt';

export default function authorize(authorizedRoles) {
  return async (req, res, next) => {
    const accessToken = getTokenFromCookie(req);

    if (!accessToken) {
      return res.sendStatus(StatusCodes.FORBIDDEN);
    }

    try {
      const payload = verifyToken(accessToken);
      if (authorizedRoles.includes(payload.role)) {
        req.payload = payload;

        return next();
      }

      return res.sendStatus(StatusCodes.FORBIDDEN);
    } catch (error) {
      return res.status(403).json(error.message);
    }
  };
}
