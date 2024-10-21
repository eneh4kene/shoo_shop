import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ( {imgURL, name, price} ) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
        <img src={imgURL} alt={name} 
        className="w-[280px] h-[280px]" />
        {name && <div className='mt-8 flex justify-start gap-2.5'>
          <img src={star} alt="rating" 
          width={24} height={24}/>
          <p className='font-montserrat text-slate-gray
          leading-normal text-xl'>(4.5)</p>
        </div>}
        {name && <h3 className="mt-2 text-2xl leading-normal font-palanquin
          font-semibold">{name}</h3>}
        {price && <p className="text-coral-red font-semibold font-montserrat
          leading-normal mt-2 text-2xl">{price}</p>}
    </div>
  )
}

export default PopularProductCard