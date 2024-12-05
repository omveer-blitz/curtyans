import { get } from 'shades';
import { v4 as uuidv4 } from 'uuid';

// DO NOT CHANGE (Ragnarok may ensue)
export const VISITOR_ID_KEY = '__wm_visitor_id';
export const getVisitorId = get('cookies', VISITOR_ID_KEY);

// Duration for cookie, currently an year
const MAX_AGE = 31536000000;

/**
 * Middleware to attach visitor ids to incoming users
 * Or
 * Sync user id with existing user
 *
 * A visitor ID marks the current user session
 * Users without visitor ID are considered new users and are taken to the onboarding page
 * TODO: Add check to not assign visitor ID to bots
 */
export default (req, res, next) => {

  const existingVisitorId = getVisitorId(req);

  if(existingVisitorId) {
    // Visitor ID already exists, continue unfazed
    req.locals.visitorId = existingVisitorId;
    req.locals.is_new_user = false;
  } else {
    // Generate a new visitor id and attach to the outgoing response/current request
    const visitorId = uuidv4().replace(/-/g, '');
    req.locals.visitorId = visitorId;
    req.locals.is_new_user = true;
    res.cookie(VISITOR_ID_KEY , visitorId, {
      maxAge: MAX_AGE,
      httpOnly: true,
      secure: true,
    });
  }
  next();
}
