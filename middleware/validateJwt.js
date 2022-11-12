import { handleErrorResponse, handleHttpError } from '../utils/handleError.js';
import { verifyToken } from '../utils/createJwt.js';

const checkAuth = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      handleErrorResponse(res, 'Not token', 409);
      return;
    }
    const token = req.headers.authorization.split(' ').pop();
    const tokenData = await verifyToken(token);

    //agregado por que si no se rompe el codigo
    if (!tokenData) {
      handleErrorResponse(res, 'Token denied', 409);
      return;
    }

    req.role = tokenData.role; //podemos verificar el role del usuario
    req.id = tokenData._id; //podemos verificar el id del usuario

    if (tokenData._id) {
      next();
    } else {
      handleErrorResponse(res, 'NOT_ALLOW', 409);
    }
  } catch (e) {
    handleHttpError(res, e);
  }
};

export { checkAuth };
