import React from 'react'
import SignUpModule from '@/components/SignUp/SignUpModule'

export default function AddUser() {
  return (
    <div className='bg-slate-100 dark:bg-slate-700 w-full h-full'>
      <SignUpModule addedByAdmin={true} />
    </div>
  )
}
