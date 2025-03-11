import axios from "axios";
import { useState } from "react";
import { Oval } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";

const SignInForm = () => {
  // signin states
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isSignningIn, setIsSignningIn] = useState(false)
  const [error, setError] = useState()
  const [success, setSuccess] = useState()
  const navigate = useNavigate()
  // form object to send to the api
  const userSigninData = new FormData()
  userSigninData.append("email" , email)
  userSigninData.append("password" , password)
  // signin api logic
  const userSignin = async (e)=>{
    e.preventDefault()
    setIsSignningIn(true)
    await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login` , userSigninData , {
      headers:{
        "Content-Type" : "application/json"
      }
    }).then((res)=>{
      setTimeout(()=>{
        if(res.data.data.role !== "user"){
          setIsSignningIn(false)
          setError("الايميل غير موجود , انشأ حساب جديد من فضلك")
        }else{
          setError("")
          setSuccess(res.data.message)
          setIsSignningIn(false)
          console.log(res)
        localStorage.setItem("token" , res.data.token)
        localStorage.setItem("userId" , res.data.data.id)
        navigate("/")
        }
      },2000)
    }).catch((err)=>{
      setError(err.response.data.message)
      console.log(error)
      setIsSignningIn(false)
    })
  }
  return (
    <section className="mt-10 flex w-full flex-col items-center gap-8" dir="rtl">
      <h2 className="text-secondary text-3xl font-bold">
        تسجيل الدخول الى الحساب
      </h2>
      <form className="w-1/2" onSubmit={(e)=> userSignin(e)}>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="text-secondary mb-2 block text-lg font-bold">
              البريد الالكتروني
            </label>
            <input
              name="email"
              type="text"
              className="border-primary w-full rounded-3xl border bg-gray-100 px-4 py-3 text-lg text-gray-800 transition-all outline-none "
              placeholder="ادخل بريدك الالكتروني"
              required
              onChange={(e)=> setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="text-secondary mb-2 block text-lg font-bold">
              كلمة المرور
            </label>
            <input
              name="password"
              type="password"
              className="border-primary w-full rounded-3xl border bg-gray-100 px-4 py-3 text-lg text-gray-800 transition-all outline-none "
              placeholder="ضع كلمة المرور "
              required
              onChange={(e)=> setPassword(e.target.value)}
            />
          </div>
          {error ? <div className="text-xl text-red-600 flex items-center justify-center">
            {error}
          </div> : <div className="text-xl text-green-600 flex items-center justify-center">
            {success}
          </div>}
          <div class="mt-5 flex items-center justify-between">
            <p className="text-secondary flex items-center justify-center font-bold">
              ليس لديك حساب؟
              <Link to="/register" className="text-white underline">
                انشاء حساب
              </Link>
            </p>
            <button
              type="submit"
              class="bg-primary hover:bg-secondary block cursor-pointer rounded-3xl px-6 py-3 text-lg tracking-wider text-white"
            >
              {isSignningIn ? <Oval
                visible={true}
                height="40"
                width="40"
                color="#fff"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
                /> : "تسجيل الدخول"}
            </button>
          </div>
          {/* facebook & google buttons */}
          <div className="flex items-center justify-center gap-3">
            <button>
              <img src="/images/facebook.png" alt="facebook" />
            </button>
            <button>
              <img src="/images/google.png" alt="google" />
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default SignInForm;
