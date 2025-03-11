import SignInForm from "../Components/SignInForm";

const SignIn = () => {
  return (
    <div
      className="relative flex h-screen items-center justify-center bg-cover bg-no-repeat p-10"
    >
      <img 
      src="/images/register-signin.jpg" 
      alt=""
      className="absolute top-0 left-0 w-full h-full z-[-1]"
       loading="lazy"/>
      <SignInForm />
    </div>
  );
};

export default SignIn;
