import React from 'react';
import style from './Layout.module.scss'
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = (props) => {
    return (
       <div>
           <Header />
           <div className={style.layoutWrapper}>
               {props.children}
           </div>
           <Footer />
       </div>
    );
};

export default Layout;