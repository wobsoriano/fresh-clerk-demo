import { type PageProps } from "$fresh/server.ts";
import { ClerkProvider } from "$fresh_clerk/islands/mod.ts";
import Header from "../components/Header.tsx";
import { Partial } from "$fresh/runtime.ts";

export default function App({ Component, state }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>fresh-clerk-demo</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body f-client-nav>
        <ClerkProvider
          {...state}
          afterSignOutUrl="/"
          publishableKey={Deno.env.get("CLERK_PUBLISHABLE_KEY")!}
          signInUrl="/sign-in"
          signUpUrl="/sign-up"
        >
          <Header />
          <main class="container mx-auto">
            <div class="flex items-start justify-center min-h-screen">
              <div class="mt-20">
                <Partial name="body">
                  <Component />
                </Partial>
              </div>
            </div>
          </main>
        </ClerkProvider>
      </body>
    </html>
  );
}
