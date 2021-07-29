import React from 'react';
import s from './Dashboard.module.scss'

const Dashboard = () => {
    return (
        <div className={s.dashBoardWrapper}>
            <div className={s.navBar}>
                <ul>
                    <li>Main</li>
                    <li>My dashboard</li>
                    <li>Privacy</li>
                    <li>Offers</li>
                </ul>
                <div>
                    <span>Basic Account</span>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;