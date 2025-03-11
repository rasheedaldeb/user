import React from "react";

const SingleEstateSectionContent = () => {
  return (
    <section className="flex w-[45%] flex-col items-center gap-5">
      <div className="top border-primary flex w-full flex-col items-center gap-5 border-b pb-3">
        <div className="flex w-full items-center justify-between">
          <img src="/images/user.png" alt="company" />
          <p className="text-secondary text-xl">اسم الشركة</p>
        </div>
      </div>
      <div className="name flex w-full flex-col items-center gap-5">
        <h3 className="text-primary text-center text-3xl font-bold">
          اسم العقار
        </h3>
        <div className="prices border-primary flex w-full items-center justify-between border-b pb-3">
          <div className="rent flex flex-col items-center gap-2">
            <h4 className="text-secondary text-xl">سعر الايجار</h4>
            <p className="text-primary text-lg">200$</p>
          </div>
          <div className="sale flex flex-col items-center gap-2">
            <h4 className="text-secondary text-xl">سعر البيع</h4>
            <p className="text-primary text-lg">200$</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h4 className="text-secondary text-xl">رعبون الحجز</h4>
            <p className="text-primary text-lg">200$</p>
          </div>
        </div>
        <div className="space-floor border-primary flex w-full items-center justify-between border-b pb-3">
          <div className="space" dir="rtl">
            <h4 className="text-secondary text-xl">المساحة</h4>
            <p className="text-primary text-lg"> 150 متر</p>
          </div>
          <div className="floor" dir="rtl">
            <h4 className="text-secondary text-xl">الطابق</h4>
            <p className="text-primary text-lg"> اول فني</p>
          </div>
          <div className="created-at">
            <h4 className="text-secondary text-xl">تاريخ النشر</h4>
            <p className="text-primary text-lg">6/3/2025</p>
          </div>
        </div>
        <div className="area border-primary flex w-full flex-col items-center gap-5 border-b pb-3">
          <h3 className="text-primary text-center text-2xl font-bold">
            العنوان
          </h3>
          <p className="text-primary text-lg">
            دمشق, دويلعة , دخلة جامع الهدى المنزل الرابع على اليمين
          </p>
        </div>
        <div className="button flex w-full items-center justify-between">
          <button
            type="button"
            class="bg-primary hover:bg-secondary block cursor-pointer rounded-3xl px-10 py-3 text-lg tracking-wider text-white"
          >
            دفع رعبون و حجز
          </button>
          <button
            type="button"
            class="bg-primary hover:bg-secondary block cursor-pointer rounded-3xl px-10 py-3 text-lg tracking-wider text-white"
          >
            اضافة الى المفضلة
          </button>
        </div>
      </div>
    </section>
  );
};

export default SingleEstateSectionContent;
