import { Unauthenticated } from '../errors/index.js';

const checkPermissions = (requestUser, resourceUserId) => {
  if (requestUser.userId === resourceUserId.toString()) return;
  throw new Unauthenticated(
    'Not authorized to access this resource'
  );
};

export default checkPermissions;
