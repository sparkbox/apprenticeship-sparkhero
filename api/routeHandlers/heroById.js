import HTTP_STATUS_CODES from '../utilities/httpStatusCodes.js';
import { heroIdIsValid, getHeroById } from '../utilities/utilities.js';

export default (r, h) => {
  const { id } = r.params;
  const idNumber = Number(id);

  if (!heroIdIsValid(idNumber)) {
    return h.response({ statusText: `Hero ${id} not found` }).code(HTTP_STATUS_CODES.BAD_REQUEST);
  }

  const hero = getHeroById(idNumber);

  return h.response(hero).code(HTTP_STATUS_CODES.OKAY);
};
