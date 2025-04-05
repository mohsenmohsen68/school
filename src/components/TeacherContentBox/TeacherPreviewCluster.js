"use client";
import React, { useEffect, useState } from "react";
import Parser from "html-react-parser";
import "./../../app/globals.css";
// import { selectOption } from "@/Redux/CMS/CMSRoutes";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { selectOption } from "@/Redux/CMS/CMSRoutes";

export default function TeacherPreviewCluster({ cluster, sentFromCMS }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [myCluster, setMyCluster] = useState([])
  console.log("article body preview : ", myCluster);
  useEffect(() => {
    const res = fetch("/api/clusters").then(res => res.json()).then(result => {
      const mycluster = result.data.find(item => item.title === cluster)
      console.log("mycluster : ", mycluster)
      setMyCluster(mycluster)
    })

  }, [])
  return (
    //<div className='w-full border rounded-md font-dana' dangerouslySetInnerHTML={{ __html: props.data.articleBody}} />

    <div className='flex flex-col mx-2 w-4/5' >
      <div className=' py-4 px-2 border rounded-md font-dana p-4 ck-content ' dangerouslySetInnerHTML={{ __html: myCluster.clusterBody }}>
        {/* {Parser(myCluster.clusterBody)} */}
      </div>
      <button
        className='rounded-md bg-green-600 hover:bg-green-400 p-2 mt-2 text-xl font-moraba w-full'
        onClick={() => {
          sentFromCMS ? dispatch(selectOption("")) : router.back();;
        }}
      >
        بازگشت
      </button>
      <div className="w-1/5 mr-1"></div>
    </div>
  );
}

