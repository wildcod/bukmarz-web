import React from 'react';
import s from './MyDashboard.module.scss'
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import LeftPanel from "./left-panel/LeftPanel";
import CardCategory from "./card-category/CardCategory";

const MyDashboard = () => {
    return (
        <div className={s.dashBoardContainer}>
           <div className={s.left}>
               <LeftPanel />
           </div>
           <div className={s.right}>
               <div className={s.gridContainer}>
                   <div className={s.col}>
                       <CardCategory />
                       <CardCategory />
                       <CardCategory />
                   </div>
                   <div className={s.col}>
                       <CardCategory />
                   </div>
                   <div className={s.col}>
                       <CardCategory />
                   </div>
               </div>
           </div>
        </div>
    );
};

export default MyDashboard;