import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"
import Button from "../components/Button"
import PopularProductCard from "../components/PopularProductCard"

const SuperQuality = () => {
  return (
    <section id="about-us" className="max-container flex justify-between
      max-lg:flex-col items-center w-full gap-10">
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin font-semibold">And Many <span className="text-coral-red">
          Super Quality</span> Shoes</h2>
        <p className="mt-4 text-slate-gray font-montserrat leading-normal">Step into excellence with our premium shoe collection, crafted for style, comfort, and durability.
             Each pair combines cutting-edge design with top-quality materials, ensuring that you not only look 
             great but feel your best every step of the way. Discover shoes that are built to stand out and engineered to last.
        </p>
        <div className="mt-9">
          <Button label="View Details" iconURL={arrowRight}/>
        </div>
      </div>
      <div>
        <PopularProductCard imgURL={shoe8}/>
      </div>
    </section>
  )
}

export default SuperQuality