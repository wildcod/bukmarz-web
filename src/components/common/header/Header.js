import React, {useState} from 'react';
import style from './Header.module.scss';
import { navLinks } from '../../../constants'
import Logo from '../../../assets/img/logo.png'

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <header className={style.headerWrapper}>
            <div className={style.container}>
               <div className={style.logo}>
                   <img
                       src={Logo}
                       alt={'bukmarz-logo'}
                   />
               </div>
               <div className={style.navLinks}>
                 <nav>
                     <ul>
                         {
                             navLinks.map((link => (
                                 <li className={link.displayName === 'Home' ? style.active : ''}>
                                     {link.displayName}
                                 </li>
                             )))
                         }
                     </ul>
                 </nav>
               </div>
            </div>
        </header>
    );
};

export default Header;