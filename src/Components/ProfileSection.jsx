import axios from "axios";
import React, { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
const ProfileSection = () => {
  const [showPass, setShowPass] = useState(false)
  const [open, setOpen] = useState(false);
  // user data array
  const userId = localStorage.getItem("userId")
  const token = localStorage.getItem("token")
  const [userProfileData, setUserProfileData] = useState()
  // update user data states
  const [image, setImage] = useState("")
  const role = "user";
  const [isSending, setIsSending] = useState(false)
  const [updated, setUpdated] = useState(false)
  const [currentData, setCurrentData] = useState([{
    name:"",
    email:"",
    phone:"",
    wallet:"",
    password:"",
  }])
  // form data to send to the backend
  const updateUserData = new FormData;
 currentData.name &&  updateUserData.append("name", currentData.name)
 currentData.email && updateUserData.append("email" , currentData.email)
 currentData.password && updateUserData.append("password" , currentData.password)
 currentData.phone &&  updateUserData.append("phone" , currentData.phone)
  updateUserData.append("role" , role)
 image &&  updateUserData.append("profileImageUrl" , image )
 currentData.wallet &&  updateUserData.append("walletBalance" , currentData.wallet)
  // update user data api 
  const updatData = async (e)=>{
    e.preventDefault()
    setIsSending(true)
    await axios.put( `${import.meta.env.VITE_API_URL}/api/auth/editAccount/${userId}` , updateUserData , {
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).then((res)=>{
      console.log(res)
      setIsSending(false)
      setOpen(false)
      setUpdated(true)
    }).catch((err)=>{
      console.log(err)
      setIsSending(false)
    })
  }
  const navigate = useNavigate()
  useEffect(()=>{
    const fetchUserData = async ()=>{
      try{
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/auth/account/${userId}`  , {
          headers:{
            Authorization: `Bearer ${token}`
          }
          
        })
        setUserProfileData(res.data.data)
      }catch (e) {
        console.log(e)
        if(e.response.status === 401) {
          alert("انتهت صلاحية الجلسة سجل الدخول مرة اخرى")
          localStorage.removeItem("token")
          localStorage.removeItem("userId")
          navigate("/signin")
        }
      }
    }
    fetchUserData()
  }, [updated])
  return (
    <section className="flex items-center justify-center gap-5 pt-20 pb-10">
      <div className="bg-secondary flex w-[500px] flex-col items-center justify-center rounded-lg p-5 min-h-[460px]">

      
      {userProfileData ? <div >
        {/* user image and name */}
        <div className="top flex w-full flex-col items-center border-b border-white py-5">
          <img
            src={`https://real-estate-app-i5m8.onrender.com${userProfileData.profileImageUrl}`}
            alt="avatar"
            className="w-[150px] h-[150px] rounded-full border border-gray-200 p-3"
          />
          <h3 className="text-3xl font-bold text-white">{userProfileData.name}</h3>
        </div>
        {/* user email and number */}
        <div className="email_nomber flex w-full items-center justify-between border-b border-white py-5">
          <h4 className="text-2xl font-bold text-white">{userProfileData.email}</h4>
          <h4 className="text-2xl font-bold text-white">{userProfileData.phone}</h4>
        </div>
        <div className="py-5">
          <p className="text-2xl font-bold text-white text-center">
            تم الانشاء بتاريخ :{userProfileData.createdAt}
          </p>
        </div>
        <div className="money flex flex-col items-center gap-3 py-5">
          <h3 className="text-3xl font-bold text-white">المحفظة</h3>
          <div className="flex items-center gap-48">
            <div className="bocket rounded-sm border border-white px-7 py-3 text-xl font-bold text-white">
              {userProfileData.walletBalance}$
            </div>
            <button
              className="text-secondary cursor-pointer rounded-lg bg-white px-5 py-3"
              onClick={() => setOpen(!open)}
            >
              تعديل البيانات
            </button>
          </div>
          <form
          onSubmit={(e)=> updatData(e)}
            className={`flex-col items-center gap-6 ${open ? "flex" : "hidden"}`}
            dir="rtl"
          >
            <div className="flex items-center gap-20">
              <div>
                <label htmlFor="image" className="mb-2 block text-lg font-bold text-white bg-primary p-3 rounded-xl cursor-pointer">
                  اضافة صورة جديدة
                </label>
                <input
                  id="image"
                  type="file"
                  className="hidden"
                  onChange={(e)=> setImage(e.target.files[0])}
                />
              </div>
              <div>
                <img src={image ? URL.createObjectURL(image) : "/images/no-image-icon-0.jpg"} alt="avatar" 
                className="w-[100px] h-[100px] rounded-xl border-white border"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
            <div className="name">
              <label className="text-white mb-2 block text-lg font-bold">
                الاسم
              </label>
              <input type="text" 
              placeholder="ادخل اسمك"
              onChange={(e)=>{
                setCurrentData({...currentData, name:e.target.value})
              }}
               className="border-primary w-full rounded-3xl border bg-gray-100 px-4 py-3 text-lg text-gray-800 transition-all outline-none focus:bg-gray-100"/>
            </div>
            <div className="email">
            <label className="text-white mb-2 block text-lg font-bold">
                البريد الالكتروني
              </label>
              <input type="email" 
              placeholder="ادخل بريدك الالكتروني "
              onChange={(e)=>{
                setCurrentData({...currentData, email:e.target.value})
              }}
               className="border-primary w-full rounded-3xl border bg-gray-100 px-4 py-3 text-lg text-gray-800 transition-all outline-none focus:bg-gray-100"/>
            </div>
            </div>
            <div className="flex items-center justify-between">
            <div className="pass">
              <label className="text-white mb-2 block text-lg font-bold">
                كلمة المرور
              </label>
              <div className="border-primary w-full rounded-3xl border bg-gray-100 px-4 h-[55px]
              flex items-center justify-between
               text-lg text-gray-800 transition-all outline-none focus:bg-gray-100">
              <input type={showPass ?  "text": "password"}
              placeholder=" ادخل الرمز الجديد"
              onChange={(e)=>{
                setCurrentData({...currentData, password:e.target.value})
              }}
               className="w-[80%] h-full outline-none"/>
               <img src={showPass ? "/public/images/eye.png": "/images/closed-eye.png"} alt="eye" 
               onClick={()=> setShowPass(!showPass)}
               className="cursor-pointer" />
              </div>
            </div>
            <div className="phone">
            <label className="text-white mb-2 block text-lg font-bold">
                رقم الهاتف
              </label>
              <input type="number" 
              placeholder="ادخل رقمك "
              onChange={(e)=>{
                setCurrentData({...currentData, phone:e.target.value})
              }}
               className="border-primary w-full rounded-3xl border bg-gray-100 px-4 py-3 text-lg text-gray-800 transition-all outline-none focus:bg-gray-100"/>
            </div>
            </div>
            <label className="text-white mb-2 block text-lg font-bold">
              اضافة رصيد الى المحفظة
            </label>
            <input type="number" 
              placeholder="ادخل الرصيد "
              onChange={(e)=>{
                setCurrentData({...currentData, wallet:e.target.value})
              }}
               className="border-primary w-full rounded-3xl border bg-gray-100 px-4 py-3 text-lg text-gray-800 transition-all outline-none focus:bg-gray-100"/>
            <button
              type="submit"
              className="bg-primary mx-auto block cursor-pointer rounded-3xl border-white px-6 py-3 text-lg tracking-wider text-white"
              
            >
              {isSending ? <Oval
                      visible={true}
                      height="30"
                      width="30"
                      color="#fff"
                      ariaLabel="oval-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                      /> : "تأكيد"}
            </button>
          </form>
        </div>
      </div> : <Oval
                      visible={true}
                      height="40"
                      width="40"
                      color="#fff"
                      ariaLabel="oval-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                      />}
                      </div>
    </section>
  );
};

export default ProfileSection;
