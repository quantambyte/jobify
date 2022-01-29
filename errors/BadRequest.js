import { StatusCodes } from 'http-status-codes';
import CustomAPI from './CustomAPI.js';

class BadRequest extends CustomAPI {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

export default BadRequest;
