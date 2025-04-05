"use client"
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { selectOption } from "@/Redux/CMS/CMSRoutes";
import { useRouter } from "next/navigation";

const ArticleEditor = dynamic(
  () => import("./../ArticleEditor/ArticleEditor"),
  { ssr: false }
);


const Toast = Swal.mixin({
  toast: true,
  position: "bottom-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});




function TeacherEditsCluster({ cluster, clusterHtml }) {

  const [clusterData,setClusterData] = useState(clusterHtml)
  const dispatch = useDispatch()
  const router = useRouter()

console.log("lll",clusterHtml)
useEffect(()=>{
  const res = fetch("/api/clusters").then(res => res.json()).then(result => {
    const mycluster = result.data.find(item => item.title === cluster)
    console.log("mycluster : ", mycluster)
    {mycluster.clusterBody.length > 0 ? setClusterData(mycluster.clusterBody) : setClusterData("<p>  من ویرایشگر خوشه ی علمی شما هستم ... </p>")}
  }) 
},[])
  const handleAddCluster = (data) => {
    setClusterData(data);
  };

const editClusterHandler = async()=>{
  const body = {
    title: cluster,
    clusterBody : clusterData,
  }

  const result = await fetch("/api/clusters",{
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      Content_Type: "application/json"
    }
  })

  console.log('result :',result.status)
  if(result.status === 200){
    Toast.fire({
      toast: true,
      customClass: {
        title: "font-moraba",
        htmlContainer: "bg-slate-200 dark:bg-slate-700"
      },
      position: "bottom-end",
      title: " خوشه با موفقیت بروز گردید ...",
      icon: "success"
    });

    //dispatch(selectOption(""))
    router.push('/cms')
    router.refresh();
  }else{
    Toast.fire({
      toast: true,
      customClass: {
        title: "font-moraba"
      },
      position: "bottom-end",
      title: " مشکلی در سمت سرور رخ داده است ...",
      icon: "error"
    });
  }

}




  return (
    <div >
      <div className='font-moraba mx-8 py-2 hover:bg-sky-400 bg-sky-500 text-4xl text-white flex justify-center items-center'>
        {cluster ? (
          cluster
        ) : (
          <>برای شما خوشه آموزشی تعریف نشده است...</>
        )}
      </div>
   <div className='font-moraba mx-8 py-2  text-xl '>قبل از ویرایش خوشه یکبار صفحه را بارگذاری مجدد کنید تا  آخرین تغییرات خوشه را مشاهده کنید ...</div>
      {cluster ? <div className='w-full px-8'>
        <ArticleEditor
          onHandleAddArticle={handleAddCluster}
          imgPath={"/api/clusters/image"}
          initData={clusterHtml}
        />
      </div> : <div>شما اجازه ویرایش هیچ خوشه ی آموزشی را ندارید ...</div>}

      <div className=' mx-8'>
              <button
                className='rounded-md bg-green-600 hover:bg-green-400 p-2 mt-2 text-xl font-moraba w-full '
                onClick={editClusterHandler}
              >
                ویرایش خوشه
              </button>
            </div>
    </div>
  );
}

export default TeacherEditsCluster;
