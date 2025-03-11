import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./SingleEstateSectionImages.css";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
const SingleEstateSection = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section className="estate-images mt-10 flex h-full w-[45%] flex-col items-center gap-12">
      {/* Estate images */}

      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 mx-auto flex h-[300px] w-full items-center justify-center"
      >
        <SwiperSlide className="h-[50%] w-[25%] bg-cover bg-center">
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            className="h-full w-full rounded-lg object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="h-[50%] w-[25%] bg-cover bg-center">
          <img
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            className="h-full w-full rounded-lg object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="h-[50%] w-[25%] bg-cover bg-center">
          <img
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            className="h-full w-full rounded-lg object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="h-[50%] w-[25%] bg-cover bg-center">
          <img
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            className="h-full w-full rounded-lg object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="h-[50%] w-[25%] bg-cover bg-center">
          <img
            src="https://swiperjs.com/demos/images/nature-5.jpg"
            className="h-full w-full rounded-lg object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="h-[50%] w-[25%] bg-cover bg-center">
          <img
            src="https://swiperjs.com/demos/images/nature-6.jpg"
            className="h-full w-full rounded-lg object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="h-[50%] w-[25%] bg-cover bg-center">
          <img
            src="https://swiperjs.com/demos/images/nature-7.jpg"
            className="h-full w-full rounded-lg object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="h-[50%] w-[25%] bg-cover bg-center">
          <img
            src="https://swiperjs.com/demos/images/nature-8.jpg"
            className="h-full w-full rounded-lg object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="h-[50%] w-[25%] rounded-lg bg-cover bg-center">
          <img
            src="https://swiperjs.com/demos/images/nature-9.jpg"
            className="h-full w-full rounded-lg object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="h-[50%] w-[25%] bg-cover bg-center">
          <img
            src="https://swiperjs.com/demos/images/nature-10.jpg"
            className="h-full w-full rounded-lg object-cover"
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper h-[200px] w-full"
      >
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            className="rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            className="rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            className="rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            className="rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-5.jpg"
            className="rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-6.jpg"
            className="rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-7.jpg"
            className="rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-8.jpg"
            className="rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-9.jpg"
            className="rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-10.jpg"
            className="rounded-lg"
          />
        </SwiperSlide>
      </Swiper>
      {/* estate content */}
    </section>
  );
};

export default SingleEstateSection;
