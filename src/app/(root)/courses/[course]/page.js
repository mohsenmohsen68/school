import BreadCrumb from "@/components/BreadCrumb";
import React from "react";
import AddToShoppingCart from "@/components/AddToShoppingCart";
import AddToFavorites from "@/components/AddToFavorites";
import Explanation from "@/components/Explanation";
import courseModel from "@/models/course";
import connectToDB from "@/utils/connectToDB";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import CommentsWrapper from "@/components/CommentsWrapper";
import SimillarCourse from "@/components/SimilarCourses/SimillarCourses";
import { BiLogoTelegram } from "react-icons/bi";
import { getMe } from "@/utils/getMe";
import Image from "next/image";
import { uuid } from "uuidv4";
import favoriteModel from "../../../../models/Favorites";
import { PiStudentFill } from "react-icons/pi";
import { GiVideoConference } from "react-icons/gi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { LuBrainCircuit } from "react-icons/lu";
import CoursePreviewHandler from "@/components/CoursePreviewHandler/CoursePreviewHandler";

export default async function page({ params }) {
  connectToDB();
  let user = await getMe();
  console.log("useeeer : ", user);
  console.log("paramaaaa : ", params);
  const courseID = params.course;
  const userID = user._id;
  const myfavorites = await favoriteModel.find({
    user: userID,
    course: courseID
  });
  const isThisCousreThisUsersFavorites = myfavorites.length > 0 ? true : false;
  const course = await courseModel
    .findOne({ _id: courseID })
    .populate("comments");
  console.log("selected course : ", course);
  const allCourses = await courseModel
    .find({})
    .populate("teacher", "firstName lastName");

  return (
    <div className='w-full flex flex-col gap-4 p-4 '>
      {/* product top section */}
      <div className='w-full md:flex mt-2 gap-4 '>
        <div className='md:w-5/12 w-full h-[500px] flex justify-center items-center bg-green-400'>
          <Image
            src={course.img}
            width={400}
            height={300}
            className='w-full h-full'
            alt='course image'
          />
        </div>
        <div className='md:w-7/12 w-full flex flex-col'>
          <div className='flex w-full'>
            <div className='w-11/12 m-0'>
              <BreadCrumb titles={"دوره ها"} />
            </div>
            <div className='w-1/12 flex bg-slate-100 dark:bg-slate-800  dark:border-slate-300 rounded-lg m-0 justify-evenly items-center'>
              <div>
                <svg
                  className='w-4 h-4 text-gray-800 dark:text-white hover:cursor-pointer'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='m9 5 7 7-7 7'
                  />
                </svg>
              </div>
              <div>
                <svg
                  className='w-4 h-4 text-gray-800 dark:text-white hover:cursor-pointer'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='m15 19-7-7 7-7'
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <p className='text-2xl font-dana mr-2 mt-4'>{course.title}</p>
          </div>
          <div className='flex justify-start mr-2 gap-2 mt-4 items-center'>
            <p className='font-dana '> دیدگاه کاربران: </p>
            <div className='flex'>
              {new Array(course.stisfiction).fill(0).map(() => (
                <FaStar key={uuid()} className='m-0 p-o text-yellow-400' />
              ))}
              {new Array(5 - course.stisfiction).fill(0).map(() => (
                <FaRegStar key={uuid()} className='m-0 p-o text-yellow-400' />
              ))}
            </div>
          </div>
          <div>
            <div className='mr-2 mt-4 flex gap-2'>
              <p className='font-dana'> قیمت :</p>
              <p className='font-dana-demiBold'>
                {course.price.toLocaleString("fa-ir")} تومان
              </p>
            </div>
            <div className='mr-2  flex gap-2  items-center'>
              <p className='text-base font-dana text-justify'> توضیحات :</p>
              <p className='py-4 text-base font-dana text-justify'>
                {course.description}
              </p>
            </div>
          </div>
          <hr className=' border-slate-400' />
          <div className='mr-4 mt-4 flex flex-col gap-2'>
            <div className='font-dana'>
              {" "}
              <span className='font-dana-demiBold'>شناسه محصول :</span>{" "}
              {courseID}{" "}
            </div>
            <div className='font-dana flex gap-2'>
              <span className='font-dana-demiBold'>خوشه علمی :</span>
              {course.cluster}
            </div>
            <div className='font-dana flex gap-2'>
              <span className='font-dana-demiBold'>پیش نیازهای دوره :</span>
              {course.preRequisite}
            </div>
            <div className='font-dana'>
              <span className='font-dana-demiBold'>اشتراک گذاری : </span>
              <IoLogoInstagram className='text-red-600 text-3xl inline' />
              <BiLogoTelegram className='text-blue-600 text-3xl inline' />
            </div>

            <div></div>
          </div>
          <hr className=' border-slate-400' />
          <div className='flex flex-col gap-4 mt-4 pr-4'>
            <div className=' font-dana-demiBold flex gap-2'>
              <p>تعداد دانش آموزان دوره :</p>
              {course.studentNo}
            </div>
            <div className='flex items-center'>
              <p className=' font-dana-demiBold ml-2'>تعداد جلسات دوره :</p>
              <p className='font-dana'>
                {course.sessionNo.toLocaleString("fa-IR")}
              </p>
            </div>
            <div className='flex items-center'>
              <p className=' font-dana-demiBold '>وضعیت دوره :</p>
              <p className='font-dana mr-2 '>در حال {course.status}</p>
            </div>
            <div className='flex items-center'>
              <AddToFavorites
                isThisCousreThisUsersFavorites={isThisCousreThisUsersFavorites}
                userID={userID ? JSON.parse(JSON.stringify(userID)) : ""}
                courseID={JSON.parse(JSON.stringify(courseID))}
              />
              <div className='mr-4 font-dana'>افزودن به علاقه مندی ها</div>
            </div>
            <AddToShoppingCart course={JSON.parse(JSON.stringify(course))} />
          </div>
        </div>
      </div>
      <hr className='border-slate-400' />
      <div className='w-4/5'>
        <CoursePreviewHandler
          data={JSON.parse(JSON.stringify(course))}
          sentFromCMS={false}
        />
      </div>

      <hr className='border-slate-400' />
      <div className='flex justify-evenly md:flex-col md:gap-4 my-5'>
        <div className='flex justify-evenly gap-4 w-full'>
          <div className='flex flex-col justify-center items-center text-lg font-dana-demiBold'>
            <PiStudentFill className='w-20 h-20 text-orange-500' />
            <p>برترین اساتید شهر</p>
          </div>
          <div className='flex flex-col justify-center items-center text-lg font-dana-demiBold'>
            <GiVideoConference className='w-20 h-20 text-blue-500' />
            <p>برگزاری دوره های مجازی</p>
          </div>
        </div>
        <div className='flex justify-evenly gap-4 w-full'>
          <div className='flex flex-col justify-center items-center text-lg font-dana-demiBold'>
            <HiOutlineUserGroup className='w-20 h-20 text-green-500' />
            <p>تشکیل انجمن های تخصصی</p>
          </div>
          <div className='flex flex-col justify-center items-center text-lg font-dana-demiBold'>
            <LuBrainCircuit className='w-20 h-20 text-yellow-400' />
            <p>منتور اختصاصی برای هر دانش آموز</p>
          </div>
        </div>
      </div>

      <div className='w-11/12 mx-auto mt-5 '>
        <Explanation
          course={JSON.parse(JSON.stringify(course))}
          userID={userID ? JSON.parse(JSON.stringify(userID)) : ""}
        >
          {/* server component passed into client component */}
          <CommentsWrapper
            courseComments={JSON.parse(JSON.stringify(course.comments))}
          />
        </Explanation>
      </div>
      <div className='w-11/12 mx-auto'>
        <div className='font-dana-demiBold text-xl my-7'>محصولات مشابه</div>
        <div className='w-full h-96'>
          <SimillarCourse
            courses={JSON.parse(JSON.stringify(allCourses))}
            filter={course.cluster}
          />
        </div>
      </div>
    </div>
  );
}
