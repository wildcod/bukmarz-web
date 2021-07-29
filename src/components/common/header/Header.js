import React, {useState} from 'react';
import style from './Header.module.scss';
import { navLinks } from '../../../constants'
import Logo from '../../../assets/img/logo.png'
import Menu from '../../../assets/img/menu.svg'
import SideBar from "./side-bar/SideBar";
import { Link, useLocation } from "react-router-dom";
import Modal from '../../common/Modal/Modal'
import Auth from "../../auth";

const Header = ({ isLoggedIn = true }) => {
    const [openMenu, setOpenMenu] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const location = useLocation()
    console.log('Location', location)
    const onCloseSideBar = () => {
        setOpenMenu(false)
    }

    return (
        <header className={style.headerWrapper}>
            <div className={style.container}>
              <div className={style.menuBar}>
                  <img src={Menu} onClick={() => setOpenMenu(true)} alt={'menu'} width={45} height={45} />
              </div>
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
                                 <li className={link.link === location?.pathname ? style.active : ''}>
                                     <Link to={link.link}>
                                         {link.displayName}
                                     </Link>
                                 </li>
                             )))
                         }
                         {
                           !isLoggedIn ?
                               <li
                                   onClick={() => setOpenModal(true)}>Sign Up/Login</li> :
                               <li
                                   className={'/dashboard' === location?.pathname ? style.active : ''}
                               >
                                   <Link to={'/dashboard'} >
                                       Dashboard
                                   </Link>
                               </li>
                         }
                     </ul>
                 </nav>
               </div>
            </div>
            {
                openMenu ?
                    <SideBar onClose={onCloseSideBar}>
                        <div className={style.mobileNavLinks}>
                            <ul>
                                {
                                    navLinks.map((link => (
                                        <li className={link.displayName === 'Home' ? style.active : ''}>
                                            {link.displayName}
                                        </li>
                                    )))
                                }
                                {
                                    !isLoggedIn ?
                                        <li onClick={() => setOpenModal(true)}>Sign Up/Login</li> :
                                        <li>
                                            <Link to={'/dashboard'} >
                                                Dashboard
                                            </Link>
                                        </li>
                                }
                            </ul>
                        </div>
                    </SideBar> : null
            }
        <Modal
            openModal={openModal}
            onClose={() => setOpenModal(false)}
        >
            <Auth />
        </Modal>
        </header>
    );
};

export default Header;