// this library help you to handle api
import axios from "axios";
import { useState } from "react";
import { Oval } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import "./All.css";
const RegisterForm = () => {
  const [showPass, setShowPass] = useState(false);
  // inputes data values
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const role = "user";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSeccess] = useState("");
  const navigate = useNavigate();
  // form data object to send to the backend
  const userData = new FormData();
  userData.append("name", name);
  userData.append("email", email);
  userData.append("password", password);
  userData.append("phone", number);
  userData.append("role", role);
  userData.append("profileImageUrl", image);
  // register api request
  const userRegister = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await axios
      .post(`${import.meta.env.VITE_API_URL}/api/auth/register`, userData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setSeccess(res.data.message);
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.data.customer.customerId);
        setIsSubmitting(false);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((err) => {
        setError(err.response.data.message);
        setTimeout(() => {
          setError("");
        }, 2000);
        setIsSubmitting(false);
      });
  };
  return (
    <section
      className="mt-20 flex w-full flex-col items-center gap-6"
      dir="rtl"
    >
      <h2 className="text-secondary text-3xl font-bold">انشاء حساب جديد</h2>
      <form className="w-full" onSubmit={(e) => userRegister(e)}>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-lg font-bold text-white">
              الاسم
            </label>
            <input
              name="name"
              type="text"
              className="border-primary w-full rounded-3xl border bg-gray-100 px-4 py-3 text-lg text-gray-800 transition-all outline-none focus:bg-gray-100"
              placeholder="ادخل اسمك "
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="mb-2 block text-lg font-bold text-white">
              البريد الالكتروني
            </label>
            <input
              name="email"
              type="text"
              className="border-primary w-full rounded-3xl border bg-gray-100 px-4 py-3 text-lg text-gray-800 transition-all outline-none focus:bg-gray-100"
              placeholder="ادخل بريدك الالكتروني"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="mb-2 block text-lg font-bold text-white">
              رقم الهاتف
            </label>
            <input
              name="number"
              type="number"
              className="border-primary w-full rounded-3xl border bg-gray-100 px-4 py-3 text-lg text-gray-800 transition-all outline-none focus:bg-gray-100"
              placeholder="ادخل رقم هاتفك"
              required
              minLength={10}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div>
            <label className="mb-2 block text-lg font-bold text-white">
              كلمة المرور
            </label>
            <div className="border-primary flex h-[55px] w-full items-center justify-between rounded-3xl border bg-gray-100 px-4 text-lg text-gray-800 transition-all outline-none focus:bg-gray-100">
              <input
                name="password"
                type={showPass ? "text" : "password"}
                className="h-full w-[80%] outline-none"
                placeholder="ضع كلمة مرور قوية"
                required
                minLength={8}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img
                src={
                  showPass ? "/public/images/eye.png" : "/images/closed-eye.png"
                }
                alt="eye"
                onClick={() => setShowPass(!showPass)}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="image flex w-full items-center justify-around py-5">
          <label
            htmlFor="user"
            className="bg-primary flex h-[52px] w-[140px] cursor-pointer items-center justify-center rounded-lg text-[17px] font-medium text-white"
          >
            اختار صورة
          </label>
          <input
            type="file"
            id="user"
            className="hidden"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
          <img
            src={
              image ? URL.createObjectURL(image) : "/images/no-image-icon-0.jpg"
            }
            className="h-[200px] w-[200px] rounded-full"
            alt="userImage"
          />
        </div>
        <div class="mt-8 flex w-full items-center justify-around">
          <p className="flex items-center justify-center font-bold text-white">
            هل لديك حساب بالفعل؟
            <Link to="/signin" className="text-secondary underline">
              تسجيل الدخول
            </Link>
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            class="bg-primary hover:bg-secondary flex cursor-pointer items-center justify-center rounded-3xl px-10 py-3 text-lg tracking-wider text-white"
          >
            {isSubmitting ? (
              <Oval
                visible={true}
                height="40"
                width="40"
                color="#fff"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            ) : (
              "انشاء حساب"
            )}
          </button>
        </div>
        {error ? (
          <div className="flex items-center justify-center text-xl font-bold text-red-600">
            {error}
          </div>
        ) : (
          <div className="flex items-center justify-center text-xl font-bold text-green-600">
            {success}
          </div>
        )}
        {/* facebook & google buttons */}
        <div className="flex items-center justify-center gap-3">
          <button>
            <img src="/images/facebook.png" alt="facebook" />
          </button>
          <button>
            <img src="/images/google.png" alt="google" />
          </button>
        </div>
      </form>
    </section>
  );
};

export default RegisterForm;
