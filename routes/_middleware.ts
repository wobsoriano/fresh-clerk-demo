import { define } from '../utils.ts';
import { createRouteMatcher } from '@jsrob/fresh-clerk/server';

const isPublicPage = createRouteMatcher(['/sign-in', '/sign-up']);
const isProtectedPage = createRouteMatcher(['/profile']);

export default define.middleware((ctx) => {
  const { userId } = ctx.state.auth;

  if (userId && isPublicPage(ctx)) {
    return ctx.redirect('/profile');
  }

  if (!userId && isProtectedPage(ctx)) {
    return ctx.redirect('/sign-in');
  }

  return ctx.next();
});
