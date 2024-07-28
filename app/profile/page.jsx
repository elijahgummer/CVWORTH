import { UserProfile } from '@clerk/nextjs';

const ProfilePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-lg">
        <UserProfile
          appearance={{
            elements: {
              card: 'bg-gray-800 text-white p-6 rounded-lg shadow-lg',
              headerTitle: 'text-2xl text-center text-white mb-6',
              formFieldInput: 'w-full px-4 py-2 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500',
              formFieldLabel: 'block text-sm font-medium text-gray-400 mb-2',
              primaryButton: 'w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500',
              secondaryButton: 'w-full py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500',
              footer: 'text-center text-gray-400 mt-6',
            },
          }}
        />
      </div>
    </div>
  );
};

export default ProfilePage;
