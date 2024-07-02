import "./../app/globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/Footer";
import HomePageSlider from "@/components/homepageSlider/HomePageSlider";
import CountDown from "@/components/countDown/CountDown";
import Promotion from "@/components/promotionSetction/Promotion";
import TitleBar from "@/components/TitleBar/TitleBar";

export default function Home() {
  return (
    <div className='bg-slate-50 dark:bg-slate-600 dark:text-white '>
      <div className=' flex justify-center h-full'>
        <Header />
      </div>

      <HomePageSlider />
      
      <div className='container mx-auto'>
        <CountDown />
      </div>

      <div className='container mx-auto'>
        <Promotion />
      </div>

    <TitleBar TitleName="نقشه راه ها" desc="نقشه های راه برای شروع اصولی یادگیری" />

      <div className='container mx-auto '>
        <Footer />
      </div>
    </div>
  );
}
