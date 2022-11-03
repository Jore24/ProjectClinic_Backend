import { handleErrorResponse, handleHttpError } from '../utils/handleError.js';
import { verifyToken } from '../utils/createJwt.js';

const checkAuth = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
        handleErrorResponse(res, "NOT_ALLOW", 409);
      return;
    }
    const token = req.headers.authorization.split(" ").pop();
    const tokenData = await verifyToken(token);
    req.role = tokenData.role; //podemos verificar el role del usuario
    
    if (tokenData._id) {
      next();
    } else {
      handleErrorResponse(res, "NOT_ALLOW", 409);
    }
  } catch (e) {
    handleHttpError(res, e);
  }
};

export { checkAuth };