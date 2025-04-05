import React from "react";
import Header from "@/components/header/header";
import dynamic from "next/dynamic";
import BreadCrumb from "@/components/BreadCrumb"
import ClustersModel from "@/models/clusters";
import ShowClusters from "@/components/ShowClusters/ShowClusters";
import TitleBar from "@/components/TitleBar/TitleBar";
import Link from "next/link";
//import Footer from "@/components/footer/Footer";

const Footer = dynamic(() => import("@/components/footer/Footer"), {
  ssr: false
});

export default async function page() {
  const clusters = await ClustersModel.find({});
  return (
    <div className='bg-slate-50 dark:bg-slate-600 dark:text-white'>
      
      <div className='mb-4 mt-4'>
        <BreadCrumb titles={"خوشه های علمی "} />
      </div>

      <div data-aos='fade-up'>
        <TitleBar
          TitleName='خوشه های علمی موجود در پژوهش سرا'
          desc='آشنایی با علایق و نیاز های شما'
          color='red'
        />
      </div>

      <div className='flex justify-center'>
        <div data-aos='fade-up' className='grid w-10/12 gap-4 grid-cols-5 mx-4 p-4'>
          {clusters.map((item) => (
            <span key={item._id} className=''>
              <Link href={`/clusters/${item._id}`}>
              <ShowClusters title={item.title} />
            </Link>
            </span>
          ))}
        </div>
      </div>
     
    </div>
  );
}
