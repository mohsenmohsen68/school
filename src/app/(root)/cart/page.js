import BreadCrumb from '@/components/BreadCrumb'
import ShoppingCart from '@/components/shoppingCart/ShoppingCart'
import React from 'react'

export default function page() {
  return (
    <div className=' mt-2 mb-4'>
      <BreadCrumb titles={"سبد خرید"} />
      <ShoppingCart />
    </div>
  )
}
