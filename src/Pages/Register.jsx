import RegisterForm from "../Components/RegisterForm";

const Register = () => {
  return (
    <div
      className="relative flex  items-center justify-center bg-cover bg-no-repeat p-10"
    >
      <img 
      src="/images/register-signin.jpg" 
      alt=""
      className="absolute top-0 left-0 w-full h-full z-[-1]"
       loading="lazy"/>
      <RegisterForm />
    </div>
  );
};

export default Register;
