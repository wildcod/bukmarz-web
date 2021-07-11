import React from 'react';
import style from './HomePage.module.scss'
import HomeCarousel from "./home-carousel/HomeCarousel";

const HomePage = () => {
    return (
        <div className={style.homePage}>
            <div className={style.carouselWrapper}>
                <HomeCarousel />
            </div>
        </div>
    );
};

export default HomePage;