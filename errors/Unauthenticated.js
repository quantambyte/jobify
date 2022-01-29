import { StatusCodes } from 'http-status-codes';
import CustomAPI from './CustomAPI.js';

class Unauthenticated extends CustomAPI {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

export default Unauthenticated;
