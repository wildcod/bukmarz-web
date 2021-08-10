import React, {useEffect, useState} from 'react';
import s from './Main.module.scss'
import {FaRegEye, FaPlusCircle} from "react-icons/fa";
import {Collapse} from "react-collapse";
import {FcCollapse, FcExpand} from "react-icons/fc";
import {connect} from 'react-redux'
import {
    addCategoryToDashboard,
    addDefaultBookmarkToCategory,
    getDefaultBookmarks,
    getDefaultCategories
} from '../../../../../redux/reducers/defaultDashboard'
import {getCategories} from '../../../../../redux/reducers/categories'
const URL = "https://www.google.com/s2/favicons?domain=https://google.com"

const Bookmark = ({ bookmark }) => {
    const [showDesc, setShowDesc] = useState(false)

    const onExpandHandler = () => {
        setShowDesc(!showDesc)
    }
    return (
        <li>
            <div className={s.left}>
                <div className={s.bookmarkTitle}>
                    <img src={URL} height={16} width={16} alt={'bookmark-icon'}/>
                    <span>{bookmark.name}</span>
                </div>
                {
                    showDesc && <p>{bookmark.description}</p>
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

const CategoryCard = ({
    category,
    bookmarks
}) => {
    const [isExpandCat, setIsExpandCat] = useState(true);
    return (
        <div className={s.card}>
            <div className={s.header}>
                <div>
                    <span className={s.wrap}><FaRegEye onClick={() => setIsExpandCat(!isExpandCat)} color={'#a3c93a'}/></span>
                </div>
                <div className={s.title}><span>{category.title}</span></div>
                <div>
                    <span className={s.wrap}><FaPlusCircle/></span>
                </div>
            </div>
            <Collapse isOpened={isExpandCat} hasNestedCollapse>
                <div className={s.list}>
                    <ul>
                        {
                            bookmarks.map(bookmark => (
                                <Bookmark
                                    key={bookmark.id}
                                    bookmark={bookmark}
                                />
                            ))
                        }
                    </ul>
                </div>
            </Collapse>
        </div>
    )
}

const Main = ({
  defaultCategories,
  defaultBookmarks,
  categories,
  addDefaultBookmarkToCategory,
  addCategoryToDashboard,
  getDefaultBookmarks,
  getDefaultCategories,
  getCategories,
  auth
}) => {
    const firstColumnCategories = defaultCategories?.filter((category, index) => index % 3 === 0)
    const secondColumnCategories = defaultCategories?.filter((category, index) => index % 3 === 1)
    const thirdColumnCategories = defaultCategories?.filter((category, index) => index % 3 === 2)

    const defaultCategoriesColumn = (defaultCategories) => (
        <>
            {defaultCategories?.map((category) => (
                    <CategoryCard
                        key={category.id}
                        category={category}
                        categories={categories}
                        totalCategories={categories.length}
                        bookmarks={defaultBookmarks.filter((bookmark) => bookmark.category === category.id)}
                        addDefaultBookmarkToCategory={addDefaultBookmarkToCategory}
                        addCategoryToDashboard={addCategoryToDashboard}
                        isSubscribed={auth.isSubscribed}
                    />
            ))}
            </>
    )

    useEffect(() => {
        getDefaultBookmarks()
        getDefaultCategories()
        getCategories()
    }, [])

    return (
        <div className={s.mainContainer}>
            <div className={s.gridContainer}>
                <div className={s.col}>
                    {defaultCategoriesColumn(firstColumnCategories)}
                </div>
                <div className={s.col}>
                    {defaultCategoriesColumn(secondColumnCategories)}
                </div>
                <div className={s.col}>
                    {defaultCategoriesColumn(thirdColumnCategories)}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    auth: state.auth.user,
    categories: state.categories.category,
    defaultCategories: state.defaultDashboard.defaultCategories,
    defaultBookmarks: state.defaultDashboard.defaultBookmarks
})

export default connect(mapStateToProps, {
    getDefaultBookmarks,
    getDefaultCategories,
    getCategories,
    addDefaultBookmarkToCategory,
    addCategoryToDashboard
})(Main)
