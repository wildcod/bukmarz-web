import React, {useState} from 'react';
import style from './Header.module.scss';
import { navLinks } from '../../../constants'
import Logo from '../../../assets/img/logo.png'
import Menu from '../../../assets/img/menu.svg'
import SideBar from "./side-bar/SideBar";
import {Link, useLocation, withRouter} from "react-router-dom";
import Modal from '../../common/Modal/Modal'
import Auth from "../../auth";
import {connect} from 'react-redux'
import {compose} from 'redux'
import userIcon from '../../../assets/img/user_icon.svg'

import {logOutUser} from '../../../redux/reducers/auth'

const Header = ({ auth, logOutUser }) => {
    const [openMenu, setOpenMenu] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [showDropDown, setShowDropDown] = useState(false)
    const location = useLocation()

    const onCloseSideBar = () => {
        setOpenMenu(false)
    }

    const onClose = () => {
        setOpenModal(false)
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
                           !auth.isAuthenticated ?
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
                {
                    auth.isAuthenticated ?
                        <div className={style.userIcon}>
                            <img src={userIcon} onClick={() => setShowDropDown(!showDropDown)} alt={'user-icon'} width={30} height={30}/>
                            {
                                showDropDown ?
                                    <div className={style.dropDown}>
                                        <ul>
                                            <li>
                                                <a href={'#'}>Profile</a>
                                            </li>
                                            <li>
                                                <a
                                                    href={'#'}
                                                    onClick={() => logOutUser()}
                                                >Logout</a>
                                            </li>
                                        </ul>
                                    </div> : null
                            }
                        </div> : null
                }
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
                                    !auth.isAuthenticated ?
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
            onClose={onClose}
        >
            <Auth onClose={onClose} />
        </Modal>
        </header>
    );
};

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default compose(
    connect(mapStateToProps, {logOutUser}),
    withRouter
)(Header)
