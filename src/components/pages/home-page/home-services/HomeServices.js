import React from 'react';
import style from './HomeServices.module.scss'
import heartImage from '../../../../assets/img/heart-white.png'
import leafImage from '../../../../assets/img/leaf-white.png'
import moneyImage from '../../../../assets/img/money-bag-white.png'

const HomeServices = () => {
    return (
        <div className={style.homeServices}>
           <h2>We provide services</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.
            </p>
            <div className={style.gridContainer}>
                {
                    cards.map((card) => (
                        <div className={style.card}>
                            <div className={style.left}>
                                <div>
                                    <img width={30} height={30} src={card.imageUrl} alt={'service-images'}/>
                                </div>
                            </div>
                            <div className={style.right}>
                                <h5>{card.title}</h5>
                                <p>{card.desc}</p>
                                <a href={'#'}>
                                    <span>Learn More...</span>
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default HomeServices;


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
    }
]