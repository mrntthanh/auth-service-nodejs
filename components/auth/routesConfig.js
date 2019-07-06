var express = require('express');
var router = express.Router();

const VerifyUserMiddleware = require('./middlewares/verifyUserMiddleware');
const AuthController = require('./controllers/authController');
const AuthValidationMiddleware = require('../common/middlewares/authValidationMiddleware');

router.post('/auth', [
    VerifyUserMiddleware.hasAuthValidFields,
    VerifyUserMiddleware.isPasswordAndUserMatch,
    AuthController.doLogin
]);

router.post('/auth/refresh', [
    AuthValidationMiddleware.validJWTNeeded,
    AuthValidationMiddleware.verifyRefreshBodyField,
    AuthValidationMiddleware.validRefreshNeeded,
    AuthController.refreshToken
]);

module.exports = router;