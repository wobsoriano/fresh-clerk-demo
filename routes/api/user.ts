import { FreshContext } from "$fresh/server.ts";
import { clerkClient } from "$fresh_clerk/server/mod.ts";
import { AuthObject } from "$fresh_clerk/deps.ts";

interface State {
  auth: AuthObject;
}

export const handler = async (
  _req: Request,
  ctx: FreshContext<State>,
): Promise<Response> => {
  const { userId } = ctx.state.auth;

  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }

  const user = await clerkClient.users.getUser(userId);
  return Response.json({ user });
};
