import { offer } from "../assets/images"
import Button from "../components/Button"
import { arrowRight } from "../assets/icons"

const SpecialOffers = () => {
  return (
    <section id="special-offer" className="flex max-xl:flex-col-reverse items-center gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="special offer" 
        width={670} height={570} className="object-contain w-full"/>
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin font-semibold"><span className="text-coral-red">
          Special </span>Offer</h2>
        <p className="mt-4 text-slate-gray font-montserrat leading-normal"><span className="font-bold text-lg"> Exclusive Shoe Sale – Limited Time Only! </span><br />
            Step up your style without stepping on your budget! For a limited time, enjoy up to 50% off on our top-selling sneakers, casual wear, 
            and running shoes. Whether you're looking for the perfect pair for a night out, something comfortable for everyday wear, or high-performance shoes for your workouts, we've got you covered!
        </p>
        <div className="mt-9 flex flex-wrap gap-4 ">
          <Button label="View details" />
          <Button label="Learn more" 
          backgroundColor="bg-white"
          textColor="text-slate-gray"
          borderColor="border-slate-gray"/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers