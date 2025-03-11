import SignInForm from "../Components/SignInForm";

const SignIn = () => {
  return (
    <div
      className="flex h-screen items-center justify-center bg-cover bg-no-repeat p-10"
      style={{ backgroundImage: "url(/images/register_signin.jpg)" }}
    >
      <SignInForm />
    </div>
  );
};

export default SignIn;
