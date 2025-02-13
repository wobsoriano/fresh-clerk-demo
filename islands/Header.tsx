import { UserButton } from '@jsrob/fresh-clerk/islands';
import { useClerkContext } from '@jsrob/fresh-clerk/hooks';

export default function Header() {
  const { auth } = useClerkContext();

  return (
    <nav class='flex items-center justify-between px-6 py-4 mb-5 bg-blue-700'>
      <div class='flex items-center'>
        <a href='/' class='text-lg font-bold text-white uppercase'>
          Fresh Clerk Demo
        </a>
      </div>
      <div class='flex items-center text-white'>
        {auth.value.userId
          ? (
            <a href='/profile' class='text-gray-300 hover:text-white mr-4'>
              Profile
            </a>
          )
          : (
            <>
              <a href='/sign-in' class='text-gray-300 hover:text-white mr-4'>
                Sign In
              </a>
              <a href='/sign-up' class='text-gray-300 hover:text-white mr-4'>
                Sign Up
              </a>
            </>
          )}
        <div class='ml-auto'>
          <UserButton />
        </div>
      </div>
    </nav>
  );
}
