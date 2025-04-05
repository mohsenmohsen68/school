import React, { useEffect, useState } from 'react'
import TeacherEditsCluster from './TeacherEditsCluster'

function ClusterEditor({cluster}) {

    const [clusterHtml,setClusterHtml] = useState("")
   
    useEffect(() => {
        const res = fetch("/api/clusters").then(res => res.json()).then(result => {
            const mycluster = result.data.find(item => item.title === cluster)
            console.log("mycluster : ", mycluster)
            {mycluster.clusterBody.length > 0 ? setClusterHtml(mycluster.clusterBody) : setClusterHtml("<p>  من ویرایشگر خوشه ی علمی شما هستم ... </p>")}
          }) 
  }, [])

  return (
    <TeacherEditsCluster cluster={cluster} clusterHtml={JSON.parse(JSON.stringify(clusterHtml))}/>
  )
}

export default ClusterEditor
