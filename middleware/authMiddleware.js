import { verifyJWT } from '../client/src/utils/tokenUtils.js';
import {
    UnauthenticatedError,
    UnauthorizedError,
    BadRequestError,
} from '../errors/customErrors.js';

export const authenticateUser = (req, res, next) => {
    const { token } = req.cookies;
    if (!token) throw new UnauthenticatedError('authentication invalid');

    try {
        const { userId, role } = verifyJWT(token);
        const testUser = userId === '66b47236a070cc2da6130dc8';
        req.user = { userId, role, testUser };
        console.log(`current user is ${req.user.userId}`);
        next();
    } catch {
        throw new UnauthenticatedError('authentication invalid');
    }
};

export const authorizePermissions = (...roles) => {
    console.log(roles);
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            throw new UnauthorizedError('Unauthorized to access this route');
        }
        next();
    };
};

export const checkForTestUser = (req, res, next) => {
    if (req.user.testUser) throw new BadRequestError('Demo User. Read Only!');
    next();
};
