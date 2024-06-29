import React from 'react'

type SubItemProps = {
    title: string;
    children: string;
  }

const Paragraph: React.FC<SubItemProps> = ({title, children}) => {
  return (
    <div className='mt-4 mb-4'>
      <div className='font-dana-demiBold mb-4 mt-4 dark:text-gray-100 '>{title}</div>
      <div className='font-dana mb-4 mt-4 text-justify p-4 leading-7 dark:text-gray-200'>{children}</div>
    </div>
  )
}

export default Paragraph
