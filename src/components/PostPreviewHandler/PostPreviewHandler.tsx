import React from 'react'
import Parser from 'html-react-parser'
import './../../app/globals.css'
import { useDispatch } from 'react-redux'
import { selectOption } from '@/Redux/CMS/CMSRoutes'



export default function PostPreviewHandler(props) {
  const dispatch = useDispatch()
  console.log('course body preview : ',props.data)
  return (
  <>
  <div className='w-full border rounded-md font-dana p-4 px-8 ck-content '>
    {Parser(props.data.postBody)}

  </div> 
    <button className='rounded-md bg-green-600 hover:bg-green-400 p-2 mt-2 text-xl font-moraba w-full' onClick={()=>{dispatch( selectOption("") ) }}>
                بازگشت
    </button>
  </>
   )
}
