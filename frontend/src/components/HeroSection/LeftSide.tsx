import { HotelType } from "../../../../backend/src/shared/types"
import CountUpNumber from "../CountUpNumber/CountUpNumber"

type Props = {
    hotels: HotelType[]
}

const LeftSide = (props: Props) => {

    const { hotels } = props

    const luxury = hotels.filter(hotel => hotel.type === 'Luxury').length
    const budget = hotels.filter(hotel => hotel.type === 'Budget').length
    const family = hotels.filter(hotel => hotel.type === 'Family').length
    const business = hotels.filter(hotel => hotel.type === 'Business').length
    const beach = hotels.filter(hotel => hotel.type === 'Beach Resort').length


  return (
    <div className="py-10 h-full flex-1 flex-wrap">
        <h1 className="font-heading mb-6">Discover your perfect stay</h1>
        <p className="text-[#4a4a4a] dark:text-[#ffffffea] mb-12 max-w-lg">
        Find and book top-rated Apartments and hotels around the world with ease. Whether you're planning a getaway or managing your property, our platform offers seamless booking experiences and robust management tools.
        </p>
        <button className='btn-primary'>Get Started</button>

        <div className='flex justify-between mt-12'>
          <div className='flex gap-3 flex-col items-center justify-center'>
            <p className='text-xs lg:text-xl text-center'>Budget Room</p>
            <CountUpNumber duration={3000} endValue={budget} />
          </div>
          {/* <div className='flex gap-3 flex-col items-center justify-center'>
            <p className='text-xs lg:text-xl text-center'>Family Room</p>
            <CountUpNumber duration={3000} endValue={family} />
          </div> */}
          <div className='flex gap-3 flex-col items-center justify-center'>
            <p className='text-xs lg:text-xl text-center'>Beach Resort Room</p>
            <CountUpNumber duration={3000} endValue={beach} />
          </div>
          {/* <div className='flex gap-3 flex-col items-center justify-center'>
            <p className='text-xs lg:text-xl text-center'>Business Room</p>
            <CountUpNumber duration={5000} endValue={business} />
          </div> */}
          <div className='flex gap-3 flex-col items-center justify-center'>
            <p className='text-xs lg:text-xl text-center'>Luxury Room</p>
            <CountUpNumber duration={5000} endValue={luxury} />
          </div>
          
        </div>
    </div>
  )
}

export default LeftSide