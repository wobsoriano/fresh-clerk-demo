import { ClerkProvider } from 'fresh-clerk/islands';
import { buildClerkProps } from 'fresh-clerk/server';
import Header from '../islands/Header.tsx';
import { Partial } from 'fresh/runtime';
import { define } from '../utils.ts'

export default define.page(function App({ Component, state }) {
  return (
    <html>
      <head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>fresh-clerk-demo</title>
        <link rel='stylesheet' href='/styles.css' />
      </head>
      <body f-client-nav>
        <ClerkProvider
          {...buildClerkProps(state)}
          afterSignOutUrl='/'
          signInUrl='/sign-in'
          signUpUrl='/sign-up'
          publishableKey={Deno.env.get('CLERK_PUBLISHABLE_KEY')!}
        >
          <Header />
          <main class='container mx-auto'>
            <div class='flex items-start justify-center min-h-screen'>
              <div class='mt-20'>
                <Partial name='body'>
                  <Component />
                </Partial>
              </div>
            </div>
          </main>
        </ClerkProvider>
      </body>
    </html>
  );
})
