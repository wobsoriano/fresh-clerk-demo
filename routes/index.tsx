import { define } from '../utils.ts';
import { SignedIn, SignedOut } from '@jsrob/fresh-clerk';

export default define.page(function Page() {
  return (
    <>
      <h1 class='text-2xl font-bold mb-5'>Welcome</h1>
      <p>
        A demo for Fresh Clerk. Go ahead and sign up or sign in!
      </p>
      <SignedIn>
        <p>Status: Signed in!</p>
      </SignedIn>
      <SignedOut>
        <p>Status: Signed out!</p>
      </SignedOut>
    </>
  );
});
