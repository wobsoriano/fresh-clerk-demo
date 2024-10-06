import { SignUp } from '@wobsoriano/fresh-clerk/islands';
import { define } from '../utils.ts';

export default define.page(function Page({ state }) {
  if (state.auth.userId) {
    return new Response('', {
      status: 307,
      headers: {
        location: '/profile',
      },
    });
  }

  return <SignUp />;
});
