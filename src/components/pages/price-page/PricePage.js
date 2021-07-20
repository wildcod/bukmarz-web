import React from 'react';
import style from './PricePage.module.scss'
import Button from "../../common/button/Button";

const plansColorScheme = [
    {
        titleColor: '#363636',
        descColor: '#ccc',
        titleBgColor: '#f2f2f2',
        textColor: '#959595',
        btnBgColor: '#ebebeb',
        btnTextColor: '#959595'
    },
    {
        titleColor: '#fff',
        descColor: '#ccc',
        titleBgColor: '#363636',
        textColor: '#363636',
        btnBgColor: '#363636',
        btnTextColor: '#fff'
    },
    {
        titleColor: '#fff',
        titleBgColor: '#a3c93a',
        descColor: '#fff',
        textColor: '#a3c93a',
        btnBgColor: '#a3c93a',
        btnTextColor: '#fff'
    },
    {
        titleColor: '#fff',
        titleBgColor: '#00bff3',
        descColor: '#fff',
        textColor: '#00bff3',
        btnBgColor: '#00bff3',
        btnTextColor: '#fff'
    },
]

const PricePage = () => {
    return (
        <div className={style.pricePage}>
           <div className={style.banner}>
               <h1>Pricing Plans</h1>
           </div>
           <div className={style.pricingContainer}>
               <h2>Make your choice</h2>
               <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
               <div className={style.plans}>
                   {
                       PLANS.map((plan, index) => (
                           <div className={style.cardContainer}>
                               <div style={{backgroundColor:plansColorScheme[index].titleBgColor }} className={style.header}>
                                   <h2
                                       style={{
                                           color:plansColorScheme[index].titleColor
                                       }}>
                                       {plan.title}
                                   </h2>
                                   <p style={{ color:plansColorScheme[index].descColor }}>{plan.desc}</p>
                               </div>
                               <div className={style.priceText}>
                                   <span style={{color:plansColorScheme[index].textColor}} id={style.doller}>$</span>
                                   <span style={{color:plansColorScheme[index].textColor}} id={style.price}>{plan.price}</span>
                                   <span id={style.misc}>per <br/> month</span>
                               </div>
                               <div className={style.features}>
                                   <ul>
                                       {
                                           plan.features.map(f => (
                                               <li>
                                                   <span>{f.displayName}</span>
                                                   <span style={{color:plansColorScheme[index].textColor}}>{f.value}</span>
                                               </li>
                                           ))
                                       }
                                   </ul>
                               </div>
                               <div className={style.btnContainer}>
                                   <Button
                                       label={'Order Now!'}
                                       style={{
                                           color:plansColorScheme[index].btnTextColor,
                                           backgroundColor:plansColorScheme[index].btnBgColor
                                       }}
                                   />
                               </div>
                           </div>
                       ))
                   }
               </div>
           </div>
        </div>
    );
};

export default PricePage;

const PLANS = [
    {
        title: 'STARTER',
        desc: '30 day free trial',
        price: '29',
        features : [
            {
                displayName: 'Disk Space',
                value: '500 GB'
            },
            {
                displayName: 'Bandwidth',
                value: '25 GB'
            },
            {
                displayName: 'Domains',
                value: '3'
            },
            {
                displayName: 'Email Accounts',
                value: '8'
            },
            {
                displayName: 'Advanced Settings',
                value: 'Yes'
            }
        ]
    },
    {
        title: 'CORPORATE',
        desc: '30 day free trial',
        price: '45',
        features : [
            {
                displayName: 'Disk Space',
                value: '500 GB'
            },
            {
                displayName: 'Bandwidth',
                value: '25 GB'
            },
            {
                displayName: 'Domains',
                value: '3'
            },
            {
                displayName: 'Email Accounts',
                value: '8'
            },
            {
                displayName: 'Advanced Settings',
                value: 'Yes'
            }
        ]
    },
    {
        title: 'BUSINESS',
        desc: '30 day free trial',
        price: '69',
        features : [
            {
                displayName: 'Disk Space',
                value: '500 GB'
            },
            {
                displayName: 'Bandwidth',
                value: '25 GB'
            },
            {
                displayName: 'Domains',
                value: '3'
            },
            {
                displayName: 'Email Accounts',
                value: '8'
            },
            {
                displayName: 'Advanced Settings',
                value: 'Yes'
            }
        ]
    },
    {
        title: 'PROFESSIONAL',
        desc: '30 day free trial',
        price: '99',
        features : [
            {
                displayName: 'Disk Space',
                value: '500 GB'
            },
            {
                displayName: 'Bandwidth',
                value: '25 GB'
            },
            {
                displayName: 'Domains',
                value: '3'
            },
            {
                displayName: 'Email Accounts',
                value: '8'
            },
            {
                displayName: 'Advanced Settings',
                value: 'Yes'
            }
        ]
    }
]