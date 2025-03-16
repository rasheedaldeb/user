const Filters = () => {
  return (
    <div className="border-primary flex h-auto w-[25%] flex-col gap-5 rounded-lg border">
      <div
        className="top border-primary flex items-center justify-center border-b pb-3"
        dir="rtl"
      >
        <h3 className="text-secondary text-xl">بحث بحسب:</h3>
      </div>
      <div
        className="areas flex flex-col items-center justify-center"
        dir="rtl"
      >
        <h3 className="text-secondary border-primary w-full border-b pb-3 text-center text-xl">
          المدن:
        </h3>
        <select
          id="countries"
          class="text-secondary border-primary block w-full rounded-lg border-b p-2.5 text-xl"
        >
          <option selected>اختر المدينة</option>
          <option value="US">دمشق</option>
          <option value="CA">حلب</option>
          <option value="FR">حماة</option>
          <option value="DE">اللاذقية</option>
        </select>
      </div>
      <div
        className="prices flex flex-col items-center justify-center"
        dir="rtl"
      >
        <h3 className="text-secondary border-primary w-full border-b pb-3 text-center text-xl">
          السعر:
        </h3>
        <select
          id="price"
          class="text-secondary block w-full rounded-lg border-b p-2.5 text-xl"
        >
          <option selected>اختر السعر المناسب</option>
          <option value="US"> 50$ -> 100$</option>
          <option value="CA">100$ -> 300$</option>
          <option value="FR">300$ -> 500$</option>
          <option value="DE">اكثر من 500$</option>
        </select>
      </div>
      <div
        className="prices flex flex-col items-center justify-center"
        dir="rtl"
      >
        <h3 className="text-secondary border-primary w-full border-b pb-3 text-center text-xl">
          المساحة:
        </h3>
        <select class="text-secondary block w-full rounded-lg p-2.5 text-xl">
          <option selected>اختر المساحة </option>
          <option value="US"> 50m -> 100m</option>
          <option value="CA">100m -> 300m</option>
          <option value="FR">300m -> 500m</option>
          <option value="DE">اكثر من 500m</option>
        </select>
        <img
          src="/images/filters.jpg"
          alt="filter"
          loading="lazy"
          className="w-full rounded-br-lg rounded-bl-lg"
        />
      </div>
    </div>
  );
};

export default Filters;
