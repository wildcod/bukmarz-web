import React, {useState} from 'react';
import s from './Main.module.scss'
import {FaRegEye, FaPlusCircle} from "react-icons/fa";
import {Collapse} from "react-collapse";
import {FcCollapse, FcExpand} from "react-icons/fc";
const URL = "https://www.google.com/s2/favicons?domain=https://google.com"

const Bookmark = () => {
    const [showDesc, setShowDesc] = useState(false)

    const onExpandHandler = () => {
        setShowDesc(!showDesc)
    }
    return (
        <li>
            <div className={s.left}>
                <div className={s.bookmarkTitle}>
                    <img src={URL} height={16} width={16} alt={'bookmark-icon'}/>
                    <span>Faded</span>
                </div>
                {
                    showDesc && <p>Description about bookmark</p>
                }
            </div>
            <div className={s.right}>
                <div>
                    <span className={s.wrap}>
                    {showDesc ?
                        <FcCollapse color={'black'} onClick={onExpandHandler} /> :
                        <FcExpand color={'black'} onClick={onExpandHandler} />}
                    </span>
                </div>
                <div><span className={s.wrap}><FaPlusCircle/></span></div>
            </div>
        </li>
    )
}

const CategoryCard = () => {
    const [isExpandCat, setIsExpandCat] = useState(true);
    return (
        <div className={s.card}>
            <div className={s.header}>
                <div>
                    <span className={s.wrap}><FaRegEye onClick={() => setIsExpandCat(!isExpandCat)} color={'#a3c93a'}/></span>
                </div>
                <div className={s.title}><span>Music</span></div>
                <div>
                    <span className={s.wrap}><FaPlusCircle/></span>
                </div>
            </div>
            <Collapse isOpened={isExpandCat} hasNestedCollapse>
                <div className={s.list}>
                    <ul>
                        <Bookmark />
                    </ul>
                </div>
            </Collapse>
        </div>
    )
}

const Main = () => {
    return (
        <div className={s.mainContainer}>
            <div className={s.gridContainer}>
                <div className={s.col}>
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                </div>
                <div className={s.col}>
                    <CategoryCard />
                    <CategoryCard />
                </div>
                <div className={s.col}>
                    <CategoryCard />
                    <CategoryCard />
                </div>
            </div>
        </div>
    );
};

export default Main;