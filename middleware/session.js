/** 
 import { handleHttpError, handleErrorResponse } from '../utils/handleError.js';
const authMiddleware = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) {
        return handleErrorResponse(res, 'No token, authorization denied', 401);
    }
    try {
        const decoded = jwt.verify(token, process.env.SECRET); //el decodeSign lo tengo en utils\token.js!
        req.user = decoded.user;
        next();
    } catch (error) {
        return handleHttpError(res, error);
    }
    }
export { authMiddleware };
 */
