import React from "react";
import SectionHeader from "./SectionHeader";
import Filters from "./Filters";
import Categories from "./Categories";
import EstatesCards from "./EstatesCards";

const Estates = () => {
  return (
    <section className="flex flex-col gap-5 p-10 pt-16">
      <div className="flex justify-between py-7">
        {/* filters section */}
        <Filters />
        {/* categories and cards section */}
        <div className="flex w-[70%] flex-col gap-5">
          <Categories />
          <EstatesCards />
        </div>
      </div>
    </section>
  );
};

export default Estates;
