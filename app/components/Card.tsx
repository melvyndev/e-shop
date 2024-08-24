"use client";
import { truncate } from '@/utils/truncate'
import React from 'react'
import Image from 'next/image'
import { Rating } from '@mui/material'
import { useRouter } from 'next/navigation'
interface CardProps {
  data: any 
}

const Card: React.FC<CardProps> = ({ data }) => {
  const router = useRouter();

  const productRating =
   data.reviews.reduce((acc:number, item:any) => 
   acc + item.rating,0)/
   data.reviews.length;


  return (
    <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
       onClick={()=>router.push(`/produit/${data.id}`)}>
        <Image 
        fill
        src={data.images[0].image}
         alt={data.name} 

         className="w-full h-full object-cover" />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
      </div>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-xl tracking-tight text-slate-900">{truncate(data.name, 20)}</h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-2xl font-bold text-slate-900">{data.price}€ </span>
          </p>
          <div className="flex flex-col items-end">
           <Rating name="half-rating" defaultValue={productRating} precision={0.5} readOnly />
            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{productRating}</span>
          <span className='text-sm text-slate-900'>{data.reviews.length?data.reviews.length:0} avis</span>
          </div>
        </div>
        <a href="#" className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Ajouter au panier
        </a>
      </div>
    </div>
  )
}

export default Card
