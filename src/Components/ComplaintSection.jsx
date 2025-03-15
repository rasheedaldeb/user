import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SectionHeader from "./SectionHeader";
import { Oval } from "react-loader-spinner";
const ComplaintSection = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  // fetch complaints states
  const [myComplaints, setMyComplaints] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    const fetchUserComplaints = async () => {
      setIsFetching(true);
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/complaint/my`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        console.log(res);
        setMyComplaints(res.data.data);
        setIsFetching(false);
      } catch (e) {
        console.log(e);
        setIsFetching(false);
        if (e.status === 401) {
          alert(e.response.data.message);
          localStorage.removeItem("token");
          navigate("/signin");
        }
      }
    };
    fetchUserComplaints();
  }, []);
  return (
    <section className="flex min-h-screen flex-col gap-10 px-10 pt-32">
      <SectionHeader title="الشكاوي الخاصة بي" />
      <input
        type="text"
        placeholder="ابحث"
        className="border-primary h-[50px] w-full rounded-3xl border px-3 outline-none"
        dir="rtl"
      />
      {isFetching ? (
        <div className="flex items-center justify-center">
          <Oval
            visible={true}
            height="40"
            width="40"
            color="rgb(23, 43, 78)"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : myComplaints.length !== 0 ? (
        <div className="complaints max-h-screen overflow-y-scroll" dir="rtl">
          <div className="complaint border-primary flex items-center justify-between border-b pb-3">
            <div className="name flex flex-col items-center gap-3">
              <h4 className="text-primary text-xl font-bold">اسم الشركة</h4>
              <p className="text-secondary text-lg font-bold">رشيد</p>
            </div>
            <div className="email flex flex-col items-center gap-3">
              <h4 className="text-primary text-xl font-bold">بريد الشركة</h4>
              <p className="text-secondary text-lg font-bold">
                rasheed@gmail.com
              </p>
            </div>
            <div className="phone flex flex-col items-center gap-3">
              <h4 className="text-primary text-xl font-bold">رقم الشركة</h4>
              <p className="text-secondary text-lg font-bold">0937071349</p>
            </div>
            <div className="complaint-content flex w-[30%] flex-col items-center gap-3">
              <h4 className="text-primary text-xl font-bold">الشكوى</h4>
              <p className="text-secondary text-lg font-bold">test test test</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <p className="text-secondary text-xl">لا يوجد شكاوي</p>
        </div>
      )}
    </section>
  );
};

export default ComplaintSection;
