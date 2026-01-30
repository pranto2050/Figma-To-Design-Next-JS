import React from "react";
import Image from "next/image";
import handFiger from "../../../../public/Our Mission Page/M2.png";
import colorFigger from "../../../../public/Our Mission Page/M3.png";
import { KeyStatisticsSection as FrequentlyAskedQuestions } from "../../products/frequentlyAskedQuestions/frequentlyAskedQuestions";
import { Experience } from "../Experience/Experience";
import vectorImg from "../../../../public/Our Mission Page/Ellipse 7.png";
// No longer need to import BlackAndDotImg if using it in CSS background

export const KeyStatisticsSection = () => {
  return (
    <section className=" relative w-full min-h-screen h-auto bg-no-repeat bg-center bg-cover md:rounded-t-[100px] rounded-t-[40px] "
  style={{
    backgroundImage: "url('/Our%20Mission%20Page/Main%20Background.png')",
  }}
>
  {/* ================= WATERMARK ================= */}
  <div className="">
    <div className="">
      <span
        className=" text-[80px] sm:text-[180px] md:text-[250px] lg:text-[300px] font-bold block"
        style={{
          fontFamily: "'Helvetica Now Display', Helvetica",
          backgroundImage:
            "linear-gradient(150deg, rgba(255,128,0,1) 0%, rgba(255,128,0,0.1) 50%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          opacity: 0.5,
        }}
      >
        About Us
      </span>
    </div>
  </div>



</section>

  );
};
