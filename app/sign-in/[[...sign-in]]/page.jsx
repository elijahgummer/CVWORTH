import { SignIn } from '@clerk/nextjs';


const SignInPage = () => {
  return (
    <div>
      <div className='flex justify-center items-center h-full'>
        <SignIn appearance={{
            elements: {
              card: 'bg-gray-700 text-white',
              logoImage: 'hidden',
              headerTitle: 'text-xl text-center text-white mb-4',
              formFieldInput: 'w-full px-4 py-2 text-black rounded-lg',
              formFieldLabel: 'block text-sm font-medium text-white mb-2',
              primaryButton: 'w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700',
              secondaryButton: 'w-full py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700',
              footer: 'text-center text-gray-400 mt-4',
            },
          }}/>
      </div>
    </div>
  );
};

export default SignInPage;
