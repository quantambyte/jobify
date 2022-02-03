import jwt from 'jsonwebtoken';

// unauthenticated error
import { Unauthenticated } from '../errors/index.js';

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new Unauthenticated('Authentication Invalid');
  }

  //   separating token
  const token = authHeader.split(' ')[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    req.user = { userId: payload.userId };
    next();
  } catch (error) {
    throw new Unauthenticated('Authentication Invalid');
  }
};

export default auth;
