import React from 'react'

function ShowClusters({title}) {

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

  return (
    <span  className={`w-40 h-40 p-4 flex justify-center items-center text-xl font-moraba text-white hover:text-black rounded-md shadow-md hover:cursor-pointer`} style={{backgroundColor:getRandomColor()}}>
      {title}
    </span>
  )
}

export default ShowClusters
