import React from 'react';
import style from './ContactPage.module.scss'
import Banner from "../../common/banner/Banner";
import locationIcon from "../../../assets/img/location.svg";
import phoneIcon from "../../../assets/img/phone.svg";
import sendIcon from "../../../assets/img/send.svg";

const ContactPage = () => {
    return (
        <div className={style.contactPage}>
            <Banner title={'Contact Information'}/>
            <div className={style.container}>
                 <div className={style.getInTouch}>
                    <h2>Get in touch</h2>
                     <p>
                         Lorem ipsum carrots, improve undergraduate developer, offset sed nibh euismod vitae. Dynamicus brightness is also the process that follows the change consuetudium beds. Types same way that we now seem a little brighter, they become fixed in the future
                     </p>
                     <div className={style.address}>
                         <h4>BookMarks Melbourne</h4>
                         <div>
                             {
                                 contact.map(c => (
                                     <div key={c} className={style.item}>
                                         <img src={c.icon} alt={'icon'} width={18} height={18}/>
                                         <span>{c.text}</span>
                                     </div>
                                 ))
                             }
                         </div>
                     </div>
                 </div>
            </div>
        </div>
    );
};

export default ContactPage;

const contact = [
    {
        text: '795 South Park Avenue, Door 6 Wonderland, CA 94107, Australia',
        icon: locationIcon
    },
    {
        text: '+440 875369208 - Office',
        icon : phoneIcon
    },
    {
        text: 'Support@bukmarz.com',
        icon: sendIcon
    }
]