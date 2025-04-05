import React from "react";
import Image from "next/image";
import BreadCrumb from "@/components/BreadCrumb" 

export default function AboutUs() {
  return (
    <div className="mt-2 ">
      <BreadCrumb titles={"درباره ما"} />
      <div className=" w-full gap-2 md:flex justify-evenly p-2 overflow-x-hidden ">
        <div className=" w-full md:w-1/2 lg:w-1/3 gap-2 mb-2 ">
          <div  data-aos='fade-up' className=" p-4 text-justify w-full mb-2 flex flex-col shadow-xl dark:shadow-sm dark:shadow-slate-200 dark:bg-slate-700">
            <div className="font-dana text-sm">درباره ما</div>
            <div className="font-dana text-2xl">
              پژوهش‌سرای دانش‌آموزی <span className="text-red-600">باقرالعلوم</span>
            </div>
          </div>
          <div  data-aos='fade-down' className=" p-4 text-justify w-full  shadow-xl dark:shadow-sm dark:shadow-slate-200 dark:bg-slate-700">
            <p className="font-dana">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
              و
            </p>
          </div>
        </div>
        <div className=" w-full lg:w-2/3 md:w-1/2 gap-2">
          <div  data-aos='fade-down' className=" p-4 text-justify w-full shadow-xl mb-2 dark:shadow-sm dark:shadow-slate-200 dark:bg-slate-700">
            <p className="font-dana">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
              و
            </p>
          </div>
          <div  data-aos='fade-up' className=" p-4 text-justify w-full shadow-xl dark:shadow-sm dark:shadow-slate-200 dark:bg-slate-700">
            <p className="font-dana dark:bg-slate-700">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
              و
            </p>
          </div>
        </div>
      </div>


      <div className=" md:flex justify-center w-full font-dana text-justify p-4 gap-2">
        <img  data-aos='fade-right' src="/img/about1.jpg" alt="about us image" className="w-full mb-2 mx-0 h-96 lg:w-1/2 lg:h-96 md:w-1/3 md:h-44 bg-black " />

        <div  data-aos='fade-left' className="flex flex-col w-full lg:w-1/2 md:w-2/3 p-4 shadow-xl mx-0 dark:shadow-sm dark:shadow-slate-200 dark:bg-slate-700">
          <div className="text-2xl font-dana "> سرآغاز راه ما در کفش جلوه ...</div>
          <div className="p-4  justify-center font-dana">
            ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
            در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
            نیاز، ولورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
            و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
            مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
            مورد نیاز، ولورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
            چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
            روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
            تکنولوژی مورد نیاز، و
          </div>
        </div>
      </div>
      <div className="md:flex justify-center w-full font-dana text-justify p-4 gap-2">
        <div  data-aos='fade-right' className="flex flex-col mb-2 w-full lg:w-1/2 md:w-2/3 p-4 shadow-xl dark:shadow-sm dark:shadow-slate-200 dark:bg-slate-700">
          <div className="text-2xl font-dana "> و ادامه راه ...</div>
          <div className="p-4 justify-center font-dana ">
            ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
            در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
            نیاز، ولورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
            و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
            مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
            مورد نیاز، ولورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
            چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
            روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
            تکنولوژی مورد نیاز، و
          </div>
        </div>
        <img  data-aos='fade-left' src="/img/about3.jpg" alt="about us image" className="w-full h-72 lg:w-1/2 lg:h-96 md:w-1/3 md:h-1/2 bg-black " />
      </div>
    </div>
  );
}
