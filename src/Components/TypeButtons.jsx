import React from "react";

const TypeButtons = () => {
  return (
    <div className="buttons flex items-center justify-between">
      <button className="border-primary flex cursor-pointer items-center gap-2 rounded-lg border px-5 py-2">
        <img src="/images/villa.png" alt="villa" className="w-[40px]" />
        <p className="text-secondary text-lg font-bold">فيلات</p>
      </button>{" "}
      <button className="border-primary flex cursor-pointer items-center gap-2 rounded-lg border px-5 py-2">
        <img src="/images/house.png" alt="house" className="w-[40px]" />
        <p className="text-secondary text-lg font-bold">منازل</p>
      </button>{" "}
      <button className="border-primary flex cursor-pointer items-center gap-2 rounded-lg border px-5 py-2">
        <img src="/images/store.png" alt="store" className="w-[40px]" />
        <p className="text-secondary text-lg font-bold">محلات </p>
      </button>
      <button className="border-primary flex cursor-pointer items-center gap-2 rounded-lg border px-5 py-2">
        <img src="/images/all.png" alt="store" className="w-[40px]" />
        <p className="text-secondary text-lg font-bold">الكل </p>
      </button>
    </div>
  );
};

export default TypeButtons;
