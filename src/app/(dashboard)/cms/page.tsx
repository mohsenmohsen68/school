// 'use client'
import React from 'react'
import CMS from '../../../components/CMS/CMS'
import { getMe } from '@/utils/getMe'
import { redirect } from 'next/navigation'



export default async function page() {
  const user = await getMe()
console.log("USER : ", user)
if(!user){
    redirect('/login')
}
  return (
    <div>
      <CMS user={JSON.parse(JSON.stringify(user))}/>
    </div>
  )
}
