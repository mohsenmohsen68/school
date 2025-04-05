import React from "react";
import connectToDB from "@/utils/connectToDB";
import clustersModel from "@/models/clusters";
import ClusterPreviewHandler from "../../../../components/ClusterPreviewHandler";
async function page({ params }) {
  connectToDB();
  console.log("params :", params);
  const id = params.cluster;
  const myCluster = await clustersModel.find({ _id: id });
  console.log("mycluster : ", myCluster);
  return (
    <div className='p-4'>
      <div className='w-full h-24 flex justify-center items-center bg-sky-500 hover:bg-sky-400 font-moraba text-3xl hover:text-white '>
        {myCluster[0].title}
      </div>
      <div className='mt-1 mx-1 p-2'>
        <ClusterPreviewHandler
          data={myCluster[0].clusterBody}
          sentFromCMS={false}
        />
      </div>
    </div>
  );
}

export default page;
