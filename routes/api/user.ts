import { define } from '../../utils.ts';
import { clerkClient } from 'fresh-clerk/server';

export const handler = define.handlers({
  async GET(ctx) {
    const { userId } = ctx.state.auth;

    if (!userId) {
      return new Response('Unauthorized', { status: 401 });
    }

    const user = await clerkClient.users.getUser(userId);
    return Response.json({ user });
  },
});
