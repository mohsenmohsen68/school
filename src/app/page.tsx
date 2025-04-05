import "./../app/globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/Footer";
import HomePageSlider from "@/components/homepageSlider/HomePageSlider";
import CountDown from "@/components/countDown/CountDown";
import Promotion from "@/components/promotionSetction/Promotion";
import TitleBar from "@/components/TitleBar/TitleBar";
import RoadMap from "@/components/RoadMap/RoadMap";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { GiMaterialsScience } from "react-icons/gi";
import { GiAstronautHelmet } from "react-icons/gi";
import { LiaRobotSolid } from "react-icons/lia";
import Course from "@/components/Course/Course";
import OurHelps from "@/components/OurHelps/OurHelps";
import HorizontalSlider from "@/components/HorizontalSlider/HorizontalSlider";
import Comment from "@/components/Comment/Comment";
import { getMe } from "@/utils/getMe";
import courseModel from "@/models/course";
import articleModel from "@/models/article";
import ArticlePagination from "@/components/ArticlePagination/ArticlePagination";
import Article from "@/components/Article/Article";
import clustersModel from "@/models/clusters";
import ShowClusters from "@/components/ShowClusters/ShowClusters";
import Link from "next/link";
import Promote from "@/components/Promotion/Promotion"

async function Home() {
  const user = await getMe();
  console.log("user : ", user);

  const courses = await courseModel
    .find({})
    .populate("teacher", "firstName lastName");
  const articles = await articleModel.find({});
  const clusters = await clustersModel.find({});

  console.log(
    "courses :",
    courses,
    "articles : ",
    articles,
    "cluser :",
    clusters
  );

  return (
    <div className='bg-slate-50 dark:bg-slate-600 dark:text-white '>
      <div className=' flex justify-center h-full sticky top-0 z-50'>
        <Header user={JSON.parse(JSON.stringify(user))} />
      </div>

      <HomePageSlider />

      <div data-aos='fade-up' className='container mx-auto'>
        <CountDown />
      </div>

      <div data-aos='fade-up'>
        <TitleBar
          TitleName='نقشه راه ها'
          desc='نقشه های راه برای شروع اصولی یادگیری'
          color='green'
        />
      </div>

      <div
        data-aos='fade-up'
        className=' md:container mx-auto grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 place-items-center gap-2 '
      >
        <RoadMap
          icon={<HiOutlineDesktopComputer />}
          title='برنامه نویسی'
          color='yellow'
          coursesNumber='دوازده'
        />
        <RoadMap
          icon={<GiMaterialsScience />}
          title='علوم پایه'
          color='blue'
          coursesNumber='بیست و دو'
        />
        <RoadMap
          icon={<GiAstronautHelmet />}
          title='نجوم'
          color='red'
          coursesNumber='هیجده'
        />
        <RoadMap
          icon={<LiaRobotSolid />}
          title='رباتیک'
          color='green'
          coursesNumber='هفت'
        />
      </div>

      <div data-aos='fade-up' className='container mx-auto mt-14'>
        <Promotion />
      </div>

      <div data-aos='fade-up'>
        <TitleBar
          TitleName='آخرین دوره های پژوهش سرا'
          desc='سکوی پرتاپ شما به سمت موفقیت'
          color='blue'
        />
      </div>

      <div
        data-aos='fade-up'
        className=' md:container mx-auto grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 place-items-center py-4'
      >
        {courses.map((item) => (
          <Course
            key={item._id}
            title={item.title}
            img={item.img}
            teacherName={item.teacher.firstName}
            teacherLastName={item.teacher.lastName}
            rate={item.stisfiction}
            studentsNumber={item.studentNo}
            desc={item.description}
            price={item.price}
            discount={item.discount}
          />
        ))}
      </div>

      <div data-aos='fade-up'>
        <TitleBar
          TitleName=' ما چه کمکی میتونیم بهت بکنیم '
          desc='از شروع مسیر کنارتیم و نمیذاریم آب تو دلت تکون بخوره'
          color='yellow'
        />
      </div>

      <div data-aos='fade-up' className='md:container mx-auto '>
        <OurHelps />
      </div>

      <div data-aos='fade-up'>
        <TitleBar
          TitleName=' محبوب ترین دوره ها '
          desc='پرمخاطب ترین و بهترین دوره های پژوهش سرا '
          color='red'
        />
      </div>

      <div data-aos='fade-up' className='container mx-auto  '>
        <HorizontalSlider courses={JSON.parse(JSON.stringify(courses))} />
      </div>

      <div data-aos='fade-up'>
        <TitleBar
          TitleName=' مقالات پر مخاطب '
          desc=' مقالات اختصاصی پژوهشسرای باقرالعلوم '
          color='green'
        />
      </div>

      <div
        data-aos='fade-up'
        className=' md:container mx-auto grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 place-items-center py-4'
      >
        {articles.map((item) => (
          <Article
            key={item._id}
            id={item._id}
            title={item.title}
            img={item.img}
            writerName={item.author.firstName}
            writerLastName={item.author.lastName}
            rate={item.rate}
            desc={item.desc}
            datePublished={item.publishedDate}
          />
        ))}
      </div>

      <div data-aos='fade-up'>
        <TitleBar
          TitleName='خوشه های علمی موجود در پژوهش سرا'
          desc='آشنایی با علایق و نیاز های شما'
          color='red'
        />
      </div>
      <div className='flex justify-center'>
        <div
          data-aos='fade-up'
          className='grid w-10/12 gap-4 grid-cols-5 mx-4 p-4'
        >
          {clusters.map((item) => (
            <span key={item._id} className=''>
              <Link href={`/clusters/${item._id}`}>
                <ShowClusters title={item.title} />
              </Link>
            </span>
          ))}
        </div>
      </div>

      <div data-aos='fade-up'>
        <TitleBar
          TitleName='چرا باید با پژوهش سرا آشنا بشم؟'
          desc='آشنایی با توانمندی های پژوهش سرا'
          color='green'
        />
      </div>
<div className="md:mb-20 sm:mb-40 mb-60">
      <Promote img1={'/img/about1.jpg'} img2={'/img/about2.jpg'}/>
</div>
      

      <div data-aos='fade-up' className='md:container mx-auto '>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
