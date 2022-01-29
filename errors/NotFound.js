import { StatusCodes } from 'http-status-codes';
import CustomAPI from './CustomAPI.js';

class NotFound extends CustomAPI {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

export default NotFound;
