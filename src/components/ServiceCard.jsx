import React from 'react'

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 px-10 py-16 w-full rounded-[20px] shadow-3xl
        sm:w-[350px] sm:min-w-[350px]">
        <div className="flex justify-center items-center
            h-11 w-11 bg-coral-red rounded-full ">
            <img src={imgURL} alt="service image" 
                width={24} height={24}/>
        </div>
        <h3 className="text-3xl font-palanquin font-bold leading-normal mt-5">{label}</h3>
        <p className="font-montserrat text-slate-gray mt-3 leading-normal
            text-lg break-words ">{subtext}</p>
    </div>
  )
}

export default ServiceCard
