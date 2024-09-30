import { SignUp } from "$fresh_clerk/islands/mod.ts";
import { defineRoute } from "$fresh/server.ts";
import { State } from "$fresh_clerk/server/mod.ts";

export default defineRoute<State>((_req, { state }) => {
  if (state.auth.userId) {
    return new Response("", {
      status: 307,
      headers: {
        location: "/profile",
      },
    });
  }

  return <SignUp />;
});
