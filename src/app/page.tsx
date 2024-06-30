import "./../app/globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/Footer";
import HomePageSlider from "@/components/homepageSlider/HomePageSlider";
import CountDown from "@/components/countDown/CountDown";

export default function Home() {
  return (
    <div className='bg-slate-50 dark:bg-slate-600 dark:text-white '>
      <div className=' flex justify-center h-full'>
        <Header />
      </div>

     <HomePageSlider/>

     <CountDown/>

      <div className='flex justify-center h-full'>
        <Footer />
      </div>
    </div>
  );
}
