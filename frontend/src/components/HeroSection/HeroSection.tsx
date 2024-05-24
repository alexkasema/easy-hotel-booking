
import { useQuery } from "react-query";

import * as apiClient from "../../api-client";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

// type Props = {
//     LeftSide: React.ReactNode;
// }

const HeroSection  = () => {
    const { data: hotels } = useQuery("fetchQuery", () =>
        apiClient.fetchHotels()
    );

    if (!hotels) <></>

    return (
        <section className='flex px-4 items-center gap-12 container mx-auto'>
            {hotels && <LeftSide hotels={hotels} />}
            {hotels && <RightSide hotels={hotels} />}

        </section>
    )
}

export default HeroSection;