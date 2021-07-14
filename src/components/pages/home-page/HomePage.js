import React from 'react';
import style from './HomePage.module.scss'
import HomeCarousel from "./home-carousel/HomeCarousel";
import HomeServices from "./home-services/HomeServices";
import HomeAboutUs from "./home-about-us/HomeAboutUs";

const HomePage = () => {
    return (
        <div className={style.homePage}>
            <div className={style.carouselWrapper}>
                <HomeCarousel />
            </div>
            <HomeServices />
            <HomeAboutUs />
        </div>
    );
};

export default HomePage;