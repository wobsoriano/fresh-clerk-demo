import { ClerkProvider } from '@jsrob/fresh-clerk/islands';
import { buildClerkProps } from '@jsrob/fresh-clerk/server';
import Header from '../islands/Header.tsx';
import { define } from '../utils.ts';

export default define.page(function App({ Component, state }) {
  return (
    <html>
      <head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>fresh-clerk-demo</title>
        <link rel='stylesheet' href='/styles.css' />
      </head>
      <body>
        <ClerkProvider {...buildClerkProps(state)}>
          <Header />
          <main class='container mx-auto'>
            <div class='flex items-start justify-center min-h-screen'>
              <div class='mt-20'>
                <Component />
              </div>
            </div>
          </main>
        </ClerkProvider>
      </body>
    </html>
  );
});
