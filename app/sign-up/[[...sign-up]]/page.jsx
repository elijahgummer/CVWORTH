import { SignUp } from '@clerk/nextjs';
const SignUpPage = () => {
  return (
    <div className="h-[50rem] flex-col w-full dark:bg-black bg-[#0A0A0A] dark:bg-grid-white/[0.2] bg-grid-black/[0.2] bg-[length:32px_32px] relative flex items-center justify-center">
    <div className="flex justify-center items-center min-h-screen mt-10">
      <div className="p-8 rounded-lg shadow-lg">
        <SignUp
          appearance={{
            elements: {
              formButtonPrimary: 'bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded',
              formFieldInput: 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded focus:ring-2 focus:ring-purple-600',
              formFieldLabel: 'text-gray-300',
              card: 'bg-gray-800',
              headerTitle: 'text-black',
              headerSubtitle: 'text-gray-400',
            }
          }}
        />
      </div>
    </div>
    </div>
  );
};
export default SignUpPage;