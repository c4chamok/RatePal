import React, { useContext, useEffect } from 'react';
import Banner from '../../Components/Banner/Banner';
import FeaturedServices from '../../Components/FeaturedServices/FeaturedServices';
import ActivityCounter from '../../Components/ActivityCounter/ActivityCounter';
import OurPartners from '../../Components/OurPartnes/OurPartnes';
import AiPowered from '../../Components/AiPowered/AiPowered';
import DownloadApp from '../../Components/DownloadApp/DownloadApp';

const Home = () => {
    document.title = "RatePal | Home";

    return (
        <div>
            <Banner></Banner>
            <FeaturedServices></FeaturedServices>
            <ActivityCounter></ActivityCounter>
            <OurPartners></OurPartners>
            <AiPowered></AiPowered>
            <DownloadApp></DownloadApp>
        </div>
    );
};

export default Home;