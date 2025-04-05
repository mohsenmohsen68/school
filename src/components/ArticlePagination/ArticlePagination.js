'use client'
import Article from "@/components/Article/Article";
import React, { useState } from "react";
import Header from "@/components/header/header";
import dynamic from "next/dynamic";
import ProductsHeader from "@/components/ProductsHeader/ProductsHeader";
import Pagination from '@mui/material/Pagination';
import { v4 as uuidv4 } from 'uuid';
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { PaginationItem } from "@mui/material"; 7
const Footer = dynamic(() => import("@/components/footer/Footer"), {
    ssr: false
});

function ArticlePagination({articles}) {

    console.log("articles ...",articles)
let element =[]
{articles.forEach(item => element.push( <Article title={item.title} id={item._id} img={item.img} writerName={item.author.firstName} writerLastName={item.author.lastName} rate={item.rate}  desc={item.desc} datePublished={item.publishedDate} key={item._id}/>))}

   

    const [pageNum, setPageNum] = useState(1)
    const handleChange = (event, value) => {
        setPageNum(value);
    };

    return (
        <>
           


            <div>
                <div className='md:container mx-auto '>
                    <ProductsHeader />
                </div>

                <div className='md:container mx-auto '>
                    <div className="p-4 grid gap-y-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {element.slice((pageNum - 1) * 12, ((pageNum - 1) * 12 + 12 < element.length ? (pageNum - 1) * 12 + 12 : element.length)).map((item) => item)}
                    </div>
                    <div className='w-full flex justify-center '>

                        <Pagination
                            count={Math.floor(element.length / 12) + 1}
                            page={pageNum}
                            onChange={handleChange}
                            renderItem={(item) => (
                                <PaginationItem
                                    components={{ previous: ArrowForwardIosIcon, next: ArrowBackIos }}
                                    {...item}
                                />
                            )}
                        />
                    </div>

                </div>
            </div>


        </>
    )
}

export default ArticlePagination
