import React, {useCallback} from 'react';
import s from './Dashboard.module.scss'
import { Link, useLocation } from "react-router-dom";
import {DASHBOARD_NAV_LINKS} from "../../../constants";
import { MyDashboard, Offers, Main, Privacy } from './tabs'

const Dashboard = () => {
    const location = useLocation()
    console.log('location', location)

    const getTab = useCallback(() => {
        const tab = location?.search?.split('=')[1]
        switch (tab){
            case 'main' :
                return <Main />
            case 'privacy' :
                return <Privacy />
            case 'offers' :
                return <Offers />
            default :
                return <MyDashboard />
        }
    }, [location])

    return (
        <div className={s.dashBoardWrapper}>
            <div className={s.navBar}>
                <ul>
                    {
                        DASHBOARD_NAV_LINKS.map(nav => (
                            <li key={nav.link}>
                                <Link to={`/dashboard${nav.link === '/' ? '' : `?tab=${nav.link.slice(1)}`}`}>
                                    {nav.displayName}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div>
                    <span>Basic Account</span>
                </div>
            </div>
            <div className={s.container}>{getTab()}</div>
        </div>
    );
};

export default Dashboard;