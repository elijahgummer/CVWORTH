import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <SignUp
          appearance={{
            elements: {
              formButtonPrimary: 'bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded',
              formFieldInput: 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded focus:ring-2 focus:ring-purple-600',
              formFieldLabel: 'text-gray-300',
              card: 'bg-gray-800',
              headerTitle: 'text-white',
              headerSubtitle: 'text-gray-400',
            }
          }}
        />
      </div>
    </div>
  );
};

export default SignUpPage;
