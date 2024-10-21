import { arrowRight } from "../assets/icons"
import Button from "../components/Button"
import { statistics, shoes } from "../constants"
import ShoeCard from "../Components/ShoeCard"
import { useState } from "react";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(shoes[0].bigShoe)
  return (
    <section
      id="Home"
      className="w-full flex flex-col xl:flex-row 
      min-h-screen justify-center gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col
      justify-center items-start w-full max-xl:padding-x
      pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our summer Collections
        </p>

        <h1 className="text-8xl max-sm:text-[72px] font-bold
          font-palanquin max-sm:leading-[82px] mt-10">
          <span 
          className="xl:bg-white xl:whitespace-nowrap
          relative z-10 pr-10">
            The New Arrival</span>
          <br />
          <span
          className="text-coral-red inline-block mt-3">Shoo</span> Shop
        </h1>
        <p className="mt-6 mb-10 text-slate-gray text-lg
          leading-8 font-montserrat max-sm:max-w-sm">
          Discover the best shoes in the world! Come get yours too...
        </p>
        <Button label={"Shop Now"} iconURL={arrowRight}/>

        <div className="flex mt-20 gap-16 justify-start items-start
           w-full ">
          {statistics.map(
            (stat) => (
              <div key={stat.label}>
                <p 
                className="font-palanquin text-4xl font-bold">{stat.value}</p>
                <p
                className="text-slate-gray font-montserrat
                  leading-7">{stat.label}</p>
              </div>
            )
          )}
        </div>
      </div>
      <div className="relative flex flex-1 justify-center items-center
        xl:min-h-screen min-xl:py-40 bg-hero" >
        <img 
         src={bigShoeImg} alt="Big shoe image"
         width={610} height={500}
         className="object-contain relative z-10 " 
        />
        <div className="flex gap-4 sm:gap-6 absolute sm:left-[10%] max-lg:left-[30%] max-sm:px-6
        -bottom-[5%] max-lg:-bottom-[30%]">
          {shoes.map(
            (image, index) => (
              <div key={index}>
                  <ShoeCard 
                    imgURL= {image}
                    changeBigShoeImg= {setBigShoeImg}
                    bigShoeImg= {bigShoeImg}
                  />
              </div>
            )
        )}
        </div>
       
      </div>
    </section>
  )
}

export default Hero