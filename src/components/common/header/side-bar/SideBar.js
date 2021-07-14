import React, {useEffect} from 'react';
import style from './SideBar.module.scss'
import close from '../../../../assets/img/close.svg'

const SideBar = ({
 children,
 onClose
 }) => {

    useEffect(() => {
        document.body.classList.add('overflow-hide');
        return () => {
            document.body.classList.remove('overflow-hide');
        }
    }, [])

    return (
        <div className={style.sideBarContainer}>
           <div className={style.innerContainer}>
               <div className={style.header}>
                   <img onClick={onClose} src={close} width={20} height={20} alt={'close-icon'}/>
               </div>
               {children}
           </div>
        </div>
    );
};

export default SideBar;