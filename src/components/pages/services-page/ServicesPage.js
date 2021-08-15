import React from 'react';
import s from './ServicesPage.module.scss'
import Banner from "../../common/banner/Banner";
import heartImage from "../../../assets/img/heart-white.png";
import leafImage from "../../../assets/img/leaf-white.png";
import moneyImage from "../../../assets/img/money-bag-white.png";

const ServicesPage = () => {
    return (
        <div className={s.servicesPage}>
            <Banner title={'Our Services'}/>
            <div className={s.main}>
                <div className={s.heading}>
                    <h2>What we can offer you</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.
                    </p>
                </div>
                <div className={s.services}>
                    {
                        cards.map((card) => (
                            <div className={s.card}>
                                <div className={s.top}>
                                    <div>
                                        <img width={30} height={30} src={card.imageUrl} alt={'service-images'}/>
                                    </div>
                                </div>
                                <div className={s.bottom}>
                                    <h5>{card.title}</h5>
                                    <p>{card.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;


const cards = [
    {
        imageUrl: heartImage,
        title: 'Carefully Crafted Design',
        desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.'
    },
    {
        imageUrl: leafImage,
        title: 'Carefully Crafted Design',
        desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.'
    },
    {
        imageUrl: moneyImage,
        title: 'Carefully Crafted Design',
        desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.'
    },
    {
        imageUrl: heartImage,
        title: 'Carefully Crafted Design',
        desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.'
    },
    {
        imageUrl: leafImage,
        title: 'Carefully Crafted Design',
        desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.'
    },
    {
        imageUrl: moneyImage,
        title: 'Carefully Crafted Design',
        desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.'
    }
]
