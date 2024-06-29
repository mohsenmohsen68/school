import React from "react";
import Header from "@/components/header/header";
import dynamic from "next/dynamic";
//import Footer from "@/components/footer/Footer";

const Footer = dynamic(() => import("@/components/footer/Footer"), {
  ssr: false
});

export default function page() {
  return (
    <div className='bg-slate-50 dark:bg-slate-600 dark:text-white'>
      <div className='flex justify-center w-full '>
        <Header />
      </div>
      articles
      <div className='flex justify-center w-full '>
        <Footer />
      </div>
    </div>
  );
}
