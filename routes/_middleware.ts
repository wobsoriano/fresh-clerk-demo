import { define } from '../utils.ts';

export default define.middleware((ctx) => {
  const publicRoutes = ['/sign-in', '/sign-up'];
  const privateRoutes = ['/profile'];

  const { auth } = ctx.state;

  if (auth.userId && publicRoutes.includes(ctx.url.pathname)) {
    return ctx.redirect('/profile');
  }

  if (!auth.userId && privateRoutes.includes(ctx.url.pathname)) {
    return ctx.redirect('/sign-in');
  }

  return ctx.next();
});
