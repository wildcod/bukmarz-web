import React from 'react';
import style from './HomeCarousel.module.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftArrow from '../../../../assets/img/slider/slide-prev.png'

const SlideArrow = (props) => {
    const { className, style, arrow, onClick } = props;
    const onArrowClick = () => {
        onClick()
    };
    return (
        <img
            className={className}
            style={{ ...style, display: "block", transform: arrow === 'left' ? 'rotate(0deg)' : 'rotate(-180deg)' }}
            onClick={() => onArrowClick()}
            src={leftArrow}
        />
    );
}


const HomeCarousel = () => {
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        nextArrow: <SlideArrow arrow={'right'}/>,
        prevArrow: <SlideArrow arrow={'left'}/>,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings} className={style.sliderContainer}>
            <div className={style.sliderContainerOne}>
                <div className={style.card}>
                   <h1>
                       Maintain financial flow and invest wisely
                   </h1>
                   <p>
                       Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.
                   </p>
                </div>
            </div>
            <div><h1>2</h1></div>
            <div><h1>3</h1></div>
            <div><h1>4</h1></div>
            <div><h1>5</h1></div>
        </Slider>
    );
};

export default HomeCarousel;