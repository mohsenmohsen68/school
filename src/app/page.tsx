import './../app/globals.css';
import Header from '@/components/header';

export default function Home() {
  return (
    <div className="dark:bg-slate-600 dark:text-white flex justify-center h-full bg-white">
      <Header/>
    </div>
  );
}
