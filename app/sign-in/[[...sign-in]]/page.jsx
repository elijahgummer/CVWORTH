import { SignIn } from '@clerk/nextjs';


const SignInPage = () => {
  return (
    <div>
      <div className='flex justify-center items-center'>
        <SignIn />
      </div>
    </div>
  );
};

export default SignInPage;
