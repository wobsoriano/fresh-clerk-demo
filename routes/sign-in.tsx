import { SignIn } from 'fresh-clerk/islands';
import { define } from '../utils.ts';

export default define.page(function Page() {
  return <SignIn />;
});
