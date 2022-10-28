import { check } from 'express-validator';
import { validateResult } from '../../utils/handleValidator.js';
// Path: middleware\validators\auth.js
// validateResult created

const validateLogin = [
  check('email').isEmail().withMessage('Email is not valid').exists().notEmpty(),
  check('password').exists().notEmpty(),
  // check('isActive') //control kc
  //   .isBoolean()
  //   .custom(isActive => isActive === true )
  //   .withMessage('User is not active'),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validateRegisterPatient = [
  check('fullname').exists().notEmpty(),
  check('documentType').exists().notEmpty(),
  check('documentNumber').exists().notEmpty(),
  check('sex').exists().notEmpty(),
  check('age').exists().notEmpty().isNumeric({ min: 1, max: 120 }),
  check('birthDate').exists().notEmpty().isDate(),
  check('phone').exists().notEmpty().isNumeric({ min: 1000000000, max: 9999999999 }),
  check('location').exists().notEmpty(),
  check('user').exists().isMongoId(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validateRegisterDoctor = [
  check('fullname').exists().notEmpty(),
  check('phone').exists().notEmpty().isNumeric({ min: 1000000000, max: 9999999999 }),
  check('speciality').exists().notEmpty(),
  check('cmp').exists().notEmpty(),
  check('rne').exists().notEmpty(),
  check('user').exists().isMongoId(),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];

export { validateLogin, validateRegisterPatient, validateRegisterDoctor };
