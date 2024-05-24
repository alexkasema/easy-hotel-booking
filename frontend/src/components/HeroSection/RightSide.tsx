import { HotelType } from "../../../../backend/src/shared/types"
import LatestDestinationCard from "../LatestDestinationCard";

type Props = {
    hotels: HotelType[]
}

const RightSide = (props: Props) => {
    
    const { hotels } = props;

    const beach = hotels.filter(hotel => hotel.type === 'Beach Resort')
    return (
        <section className="flex-1 py-10 h-full md:grid hidden gap-8 grid-cols-1">
            <p className="text-2xl mb-2">Featured Apartments</p>    
            <div className='md:grid hidden gap-8 grid-cols-1'>
                <LatestDestinationCard hotel={beach[0]} />
            </div>
            <div className='grid grid-cols-2 gap-8 h-48'>
                {hotels.slice(0, 2).map(hotel => (
                    <LatestDestinationCard hotel={hotel} />
                ))}
            </div>
        </section>
    )
}

export default RightSide