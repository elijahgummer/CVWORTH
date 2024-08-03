import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <div className="h-[50rem] flex-col w-full dark:bg-black bg-[#0A0A0A] dark:bg-grid-white/[0.2] bg-grid-black/[0.2] bg-[length:32px_32px] relative flex items-center justify-center">
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
        <SignIn 
          appearance={{
            elements: {
              card: 'bg-gray-800 text-white p-6 rounded-lg shadow-lg',
              logoImage: 'hidden',
              headerTitle: 'text-2xl text-center text-white mb-6',
              primaryButton: 'w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500',
              secondaryButton: 'w-full py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500',
              footer: 'text-center text-gray-400 mt-6',
            },
          }}
        />
      </div>
    </div>
    </div>
  );
};

export default SignInPage;
