import React from "react";
import SectionHeader from "./SectionHeader";
import { Link } from "react-router-dom";

const AboutCompany_SocialMedia = () => {
  return (
    <section className="flex w-[45%] flex-col items-center gap-5">
      <SectionHeader title="معلومات عن الشركة" />
      <div className="border-primary flex w-full flex-col items-center gap-5 border-b pb-5">
        <h4 className="text-secondary text-xl">وصف الشركة</h4>
        <p className="text-secondary text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          ea.
        </p>
      </div>
      <div className="border-primary flex w-full flex-col items-center gap-5 border-b pb-5">
        <h4 className="text-secondary text-xl">هدف الشركة</h4>
        <p className="text-secondary text-lg">test</p>
      </div>
      <div className="border-primary flex w-full flex-col items-center gap-5 border-b pb-5">
        <h4 className="text-secondary text-xl">رؤية الشركة</h4>
        <p className="text-secondary text-lg">test</p>
      </div>
      <div className="social flex flex-col items-center gap-5">
        <h2 className="text-secondary text-2xl font-bold">تواصل مع الشركة</h2>
        <div className="social-icons flex items-center gap-5">
          <div className="website bg-primary flex h-[50px] w-[50px] items-center justify-center rounded-full">
            <Link>
              <img src="/images/linkicon.png" alt="web" />
            </Link>
          </div>
          <div className="facebook bg-primary flex h-[50px] w-[50px] items-center justify-center rounded-full">
            <Link>
              <img src="/images/facebookicon.png" alt="web" />
            </Link>
          </div>
          <div className="insta bg-primary flex h-[50px] w-[50px] items-center justify-center rounded-full">
            <Link>
              <img src="/images/instagramicon.png" alt="web" />
            </Link>
          </div>
          <div className="whatsapp bg-primary flex h-[50px] w-[50px] items-center justify-center rounded-full">
            <Link>
              <img src="/images/whatsappicon.png" alt="web" />
            </Link>
          </div>
          <div className="telegram bg-primary flex h-[50px] w-[50px] items-center justify-center rounded-full">
            <Link>
              <img src="/images/telegramicon.png" alt="web" />
            </Link>
          </div>
          <div className="linkedin bg-primary flex h-[50px] w-[50px] items-center justify-center rounded-full">
            <Link>
              <img src="/images/linkedinicon.png" alt="web" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany_SocialMedia;
