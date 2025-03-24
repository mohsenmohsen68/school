"use client"
import {
  createANewCluster,
  deleteCluster,
  getClustersFromServer
} from "@/Redux/clusters/Clusters";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

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



function ManageClusters() {
  const [allClusters, setAllClusters] = useState([]);
  const dispatch = useDispatch();
  const [clusterName, setClusterName] = useState("");

  const getData = async () => {
    const clusters = await dispatch(getClustersFromServer());
    console.log("cluters : ", clusters);
    setAllClusters(clusters.payload.data);
  };
  const handleAdd=async()=>{
    
    const res = await dispatch(createANewCluster(clusterName));
    console.log("res : ", res);
    if(res.payload.status === 201){
        Toast.fire({
            toast: true,
            customClass: {
              title: "font-moraba",
              htmlContainer: "bg-slate-200 dark:bg-slate-700"
            },
            position: "bottom-end",
            title: " خوشه علمی با موفقیت ثبت گردید ...",
            icon: "success"
          });
         getData()
         setClusterName("")
    }else{
        Toast.fire({
            toast: true,
            customClass: {
              title: "font-moraba",
              htmlContainer: "bg-slate-200 dark:bg-slate-700"
            },
            position: "bottom-end",
            title: " مشکلی رخ داده است ...",
            icon: "success"
          });
    }
  }

  const deleteHandler =async(id)=>{
    const res = await dispatch(deleteCluster(id))
    console.log("result : ", res)
    if(res.payload.status === 200){
        Toast.fire({
            toast: true,
            customClass: {
              title: "font-moraba",
              htmlContainer: "bg-slate-200 dark:bg-slate-700"
            },
            position: "bottom-end",
            title: " خوشه علمی با موفقیت حذف گردید ...",
            icon: "success"
          });
          getData();
          setClusterName("")
    }else{
        Toast.fire({
            toast: true,
            customClass: {
              title: "font-moraba",
              htmlContainer: "bg-slate-200 dark:bg-slate-700"
            },
            position: "bottom-end",
            title: " مشکلی رخ داده است ...",
            icon: "success"
          });
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className=' w-full h-full flex flex-col justify-center items-center '>
      <div className='flex justify-center border rounded-md pr-2 w-fit overflow-hidden'>
        <input
          type='text'
          className="outline-none"
          name=''
          id=''
          placeholder="اضافه کردن خوشه جدید"
          value={clusterName}
          onChange={(e) => setClusterName(e.target.value)}
        />
        <button
          className='px-2  bg-green-400 font-bold text-2xl hover:bg-green-500 hover:text-white'
          onClick={handleAdd}
        >
          +
        </button>
      </div>
      <div className='flex w-full justify-evenly mt-3 font-moraba'>
        {allClusters.map((item) => (
          <div key={item._id} className="flex flex-col rounded-md overflow-hidden">
            <div className='p-4  bg-green-400 hover:bg-green-500 '>
              {item.title}
            </div>
            <button className="bg-red-400 hover:bg-red-500 hover:text-white"
            onClick={()=>deleteHandler(item._id)}>-</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageClusters;
