import { useState } from "react";

const CompanyProfileSection = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="flex w-[45%] items-center justify-center gap-5 pt-20 pb-10">
      <div className="bg-secondary flex w-[500px] flex-col items-center justify-center rounded-lg p-5">
        {/* user image and name */}
        <div className="top flex w-full flex-col items-center border-b border-white py-5">
          <img
            src="/images/user.png"
            alt="avatar"
            className="w-[150px] rounded-full border border-gray-200 p-3"
          />
          <h3 className="text-3xl font-bold text-white">اسم الشركة</h3>
        </div>
        {/* user email and number */}
        <div className="email_nomber flex w-full items-center justify-between border-b border-white py-5">
          <h4 className="text-2xl font-bold text-white">test@email.com</h4>
          <h4 className="text-2xl font-bold text-white">6557676576</h4>
        </div>
        <div
          className="location flex w-full items-center justify-between py-5"
          dir="rtl"
        >
          <h3 className="text-2xl font-bold text-white">عنوان الشركة:</h3>
          <p className="text-xl font-bold text-white">دمشق</p>
        </div>
        <div className="py-5">
          <p className="text-2xl font-bold text-white">
            تم الانشاء بتاريخ : 5/3/2025
          </p>
        </div>
        <div className="money flex w-full flex-col items-center gap-3 py-5">
          <div className="flex items-center gap-48">
            <button
              className="text-secondary cursor-pointer rounded-lg bg-white px-5 py-3"
              onClick={() => setOpen(!open)}
            >
              ارسال شكوى
            </button>
          </div>
          <form
            className={`w-full flex-col items-center gap-6 ${open ? "flex" : "hidden"}`}
            dir="rtl"
          >
            <div className="flex w-full items-center justify-center gap-20">
              <div className="w-full">
                <label className="mb-2 block text-lg font-bold text-white">
                  الشكوى
                </label>
                <input
                  name="name"
                  type="text"
                  className="border-primary w-full rounded-3xl border bg-gray-100 px-4 py-3 text-lg text-gray-800 transition-all outline-none"
                  placeholder=" الشكوى"
                />
              </div>
            </div>
            <button
              type="button"
              class="bg-primary mx-auto block cursor-pointer rounded-3xl border-white px-6 py-3 text-lg tracking-wider text-white"
            >
              تأكيد
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfileSection;
