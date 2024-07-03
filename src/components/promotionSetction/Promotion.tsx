"use client";
import React, { useState } from "react";
import { IoBookOutline } from "react-icons/io5";
import { GiSpiderWeb } from "react-icons/gi";
import { PiSealCheckThin } from "react-icons/pi";
import { LiaCertificateSolid } from "react-icons/lia";
import { PiSuitcaseSimpleThin } from "react-icons/pi";
import Community from "./PromotionSection/PromotionSection";
import GuideToJob from "./GuideToJob/GuideToJob";
import Talent from "./Talant/Talent";
import Learning from "./Learning/Learning";
import PromotionSection from "./PromotionSection/PromotionSection";

export default function Promotion() {
  const [skill, setSkill] = useState(true);
  const [community, setCommunity] = useState(false);
  const [guide, setGuide] = useState(false);
  const [talent, setTalent] = useState(false);

  const handleSkill = () => {
    setCommunity(false);
    setGuide(false);
    setTalent(false);
    setSkill(true);
  };
  const handleTalent = () => {
    setSkill(false);
    setCommunity(false);
    setGuide(false);
    setTalent(true);
  };
  const handleGuide = () => {
    setSkill(false);
    setCommunity(false);
    setGuide(true);
    setTalent(false);
  };
  const handleCommunity = () => {
    setSkill(false);
    setCommunity(true);
    setGuide(false);
    setTalent(false);
  };

  return (
    <div className='flex flex-col justify-center items-center shadow-md  dark:bg-slate-700 bg-slate-200 w-full h-fit my-4 p-0 overflow-hidden'>
      <div className='flex justify-evenly container'>
        <div
          onClick={() => handleSkill()}
          className={`p-4 ${
            skill && "text-red-500"
          } hover:text-red-500 border-2 dark:border-slate-700 border-slate-200 hover:border-b-red-500 dark:hover:border-b-red-500 hover:border-b-2`}
        >
          <div className='flex flex-col gap-4 items-center justify-center'>
            <IoBookOutline className='text-4xl' />
            <div className='lg:font-dana-medium font-dana hidden md:block'>
              آموزش مهارت محور
            </div>
          </div>
        </div>
        <div
          onClick={() => handleCommunity()}
          className={`p-4 ${
            community && "text-green-500"
          } hover:text-green-500 border-2 dark:border-slate-700 border-slate-200 hover:border-b-green-500 dark:hover:border-b-green-500 hover:border-b-2`}
        >
          <div className='flex flex-col gap-4 items-center justify-center '>
            <GiSpiderWeb className='text-4xl' />
            <div className=' lg:font-dana-medium font-dana hidden md:block'>
              جامعه فعال برنامه نویسان
            </div>
          </div>
        </div>

        <div
          onClick={() => handleTalent()}
          className={`p-4 ${
            talent && "text-orange-500"
          } hover:text-orange-500 border-2 dark:border-slate-700 border-slate-200 hover:border-b-orange-500 dark:hover:border-b-orange-500 hover:border-b-2`}
        >
          <div className='flex flex-col gap-4 items-center justify-center'>
            <LiaCertificateSolid className='text-4xl' />
            <div className='lg:font-dana-medium font-dana hidden md:block'>
              استعداد یابی و ارزیابی
            </div>
          </div>
        </div>
        <div
          onClick={() => handleGuide()}
          className={`p-4 ${
            guide && "text-sky-500"
          } hover:text-sky-500 border-2 dark:border-slate-700 border-slate-200 hover:border-b-sky-500 dark:hover:border-b-sky-500 hover:border-b-2`}
        >
          <div className='flex flex-col gap-4 items-center justify-center'>
            <PiSuitcaseSimpleThin className='text-4xl' />
            <div className='lg:font-dana-medium font-dana hidden md:block'>
              هدایت به بازار کار
            </div>
          </div>
        </div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
      {community && (
        <PromotionSection
          color='bg-green-400'
          title='یک جامعه فعال از منتورها و دانشجویان برای پاسخگویی به سوالات شما آماده
          هستند'
          body=' اگر در جلسات آموزشی سوالی داشته باشید، می‌توانید سوال خود را در همان
          جلسه ثبت نمایید. سوال شما در جامعه مربوط به دوره ثبت می‌شود و منتور‌ها
          و دانشجویان هم دوره ای، پاسخگوی سوالات شما خواهند بود. جامعه برنامه
          نویسان سون لرن نه تنها فضایی است برای پشتیبانی و پاسخگویی به سوالات
          شما، بلکه به زودی از پر از تجربه‌های ارزشمند برترین برنامه نویسان
          ایرانی در شرکت‌های مطرح خواهد شد.'
          img='/img/learning.png'
        />
      )}
      {guide && <PromotionSection
          color='bg-sky-400'
          title='آماده سازی دانش آموزان برای ورود به بازار کار'
          body=' 
          هرساله شرکت‌های معتبری از سراسر ایران اقدام به جذب نیرو در حوزه
         تکنولوژی می‌کنند و بسیاری از این مجموعه‌ها از سون‌لرن درخواست معرفی
         نیروی متخصص دارند. در این شرایط سون‌لرن خود را موظف می‌داند تا افراد
         برتر هر دوره را اعتبارسنجی کرده و به شرکت‌های متقاضی جهت استخدام معرفی
         کند. سایر دانشجویان نیز درصورت بهره‌مندی کامل از محتوای دوره و تکمیل
         مهارت‌های خود به‌راحتی قادر به اشتغال و فعالیت در زمینه موردنظر خود
         خواهند بود.'
          img='/img/GuideToJob.png'
        />}
      {talent && <PromotionSection
          color='bg-orange-400'
          title='تلاش برای کشف بهترین استعداد دانش آموزان'
          body='  فعالیت‌های دانشجویان در طول مشاهده دوره شامل مشاهده منظم جلسات، پاسخ
          صحیح به سوالات آزمون‌ها و فعالیت ویژه و مستمر آن‌ها در جامعه برنامه
          نویسی، برای آن‌ها امتیازاتی در بر خواهد داشت و تیم سون لرن دانشجویان
          ممتاز را با توجه به امتیازاتشان رده بندی و برای معرفی به بازار کار
          معرفی می‌کند. در انتهای دوره نیز آزمون‌های جامع چند مرحله ای تدارک
          دیده شده است که ارزیابی مهارتی دانشجو را انجام می‌دهد. در صورت قبولی
          دانشجو در آزمون‌های ذکر شده در انتهای دوره، مدرک سطح بندی شده آنلاین
          سون لرن به ایشان اهدا می‌شود.'
          img='/img/Talent.png'
        />}
      {skill && <PromotionSection
          color='bg-red-500'
          title='در دنیای برنامه نویسی و نرم افزار، مهارت همیشه بر مدرک و مدرک گرایی
          اولویت داشته است. ما در تیم سون لرن با اساتیدی که تخصص و تجربه بالا در
          شرکت ‌های بزرگ دارند، این مهارت و تجربه‌های ارزشمند آن‌ها را در
          سرفصل‌های آموزشی خود قرار داده ایم و به شما منتقل می‌کنیم.'
          body='حتی دانشجویانی که سال‌ها در دانشگاه‌های مطرح کشور در رشته‌های تخصصی
          علوم کامپیوتر درس خوانده اند و مدرک گرفته اند، آماده ورود به بازار کار
          نیستند. دوره‌های سون لرن با هدف پر کردن گپ بین دانشگاه و صنعت طراحی
          شده اند و حاوی محتوای کاملا منطبق بر نیاز بازار کار هستند. و مهمتر
          اینکه این تجربه‌ها را از مدرسینی دریافت می‌کنید که در بهترین شرکت ‌های
          فناوری ایران مانند دیجی کالا، اسنپ، فیلیمو و آپارات، علی بابا، جاباما
          و سون لرن فعالیت دارند. در جلسات مصاحبه کاری، همه آنچه نیاز دارید
          مهارت مورد نیاز بازار کار و پرزنت درست خودتان است. با ما در این مسیر
          لذت بخش و البته نه کوتاه مدت همراه باشید تا آماده ورود به بازار کار
          شوید.'
          img='/img/Skill.png'
        />}
    </div>
  );
}
