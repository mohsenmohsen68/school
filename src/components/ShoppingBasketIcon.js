"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { RiShoppingBag3Line } from "react-icons/ri";

function ShoppingBasketIcon() {
    const [showBasket, setShowBasket] = useState(false)
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
   
    if (typeof window !== "undefined") {
      const storage = JSON.parse(localStorage.getItem("courseShoppingCart"));
      if (storage) {
        setCartData(JSON.parse(localStorage.getItem("courseShoppingCart")));
      }
    }
  }, []);

  return (
    <div className='w-9 h-9 rounded-full flex justify-center items-center bg-black text-white dark:bg-sky-500 dark:text-white '>
       <Link href={"/cart"}>
              <div className='relative hover:cursor-pointer group'>
                <RiShoppingBag3Line className='text-2xl' />
                {cartData.length > 0 ? (
                  <span className='absolute w-4 h-4 text-xs leading-3 -top-3 -right-2 flex items-center justify-center border border-white bg-white text-black rounded-full dark:bg-slate-800 dark:text-white dark:border-slate-300'>
                    {cartData.length.toLocaleString("fa-IR")}
                  </span>
                ) : (
                  <></>
                )}
                <div className='absolute border top-5 left-2 rounded-lg bg-slate-300 invisible group-hover:visible hover:visible overflow-y-auto no-scrollbar p-2 h-80 w-60 dark:bg-slate-800 dark:border-slate-800'>
                  {cartData.length > 0 &&
                    cartData.map((item) => (
                      <div
                        key={item.id}
                        className='flex flex-col justify-center items-center p-2 border-b mb-2 border-b-stone-400'
                      >
                        <Image
                          src={item.img}
                          width={100}
                          height={200}
                          alt='basket product image'
                        />
                        <div className='font-dana-medium'>{item.name}</div>
                        <div className='font-dana-medium'>{item.price.toLocaleString("fa-IR")} تومان</div>
                        <hr className='text-white bg-white border-t-2 h-2' />
                      </div>
                    ))}
                  <button
                    className='bg-green-400 w-full px-2 py-1 font-dana hover:text-white'
                    onClick={() => router.push("/cart")}
                  >
                    سبد خرید
                  </button>
                </div>
              </div>
            </Link>
    </div>
  )
}

export default ShoppingBasketIcon
