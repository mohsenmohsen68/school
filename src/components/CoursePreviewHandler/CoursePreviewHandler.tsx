import React from 'react'
import Parser from 'html-react-parser'
import './../../app/globals.css'



export default function ArticlePreviewHandler(props) {
  console.log('article body preview : ',props.data.articleBody)
  return (
    //<div className='w-full border rounded-md font-dana' dangerouslySetInnerHTML={{ __html: props.data.articleBody}} />
  
  <div className='w-full border rounded-md font-dana p-4 ck-content '>
    {Parser(props.data.articleBody)}
  </div> 
   )
}
