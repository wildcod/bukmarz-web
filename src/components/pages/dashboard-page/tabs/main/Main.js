import React, {useEffect, useState, useMemo} from 'react';
import s from './Main.module.scss'
import {FaRegEye, FaPlusCircle} from "react-icons/fa";
import {Collapse} from "reactstrap";
import {FcCollapse, FcExpand} from "react-icons/fc";
import {connect} from 'react-redux'
import {
    addCategoryToDashboard,
    addDefaultBookmarkToCategory,
    getDefaultBookmarks,
    getDefaultCategories
} from '../../../../../redux/reducers/defaultDashboard'
import {getCategories} from '../../../../../redux/reducers/categories'
import Modal from '../../../../common/Modal/Modal'
import Button from '../../../../common/button/Button'
const URL = "https://www.google.com/s2/favicons?domain=https://google.com"
const MAX_CAT = 5;

const Bookmark = ({
    bookmark,
    addDefaultBookmarkToCategory,
    categoryId,
    categories
}) => {
    const [showDesc, setShowDesc] = useState(false)
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [selectedCatId, setSelectedCatId] = useState(null)

    const onExpandHandler = () => {
        setShowDesc(!showDesc)
    }

    const addToCategory = () => {
        if(selectedCatId){
            addDefaultBookmarkToCategory({
                category: selectedCatId,
                name: bookmark.name,
                url: bookmark.url,
                description: bookmark.description
            })
        }else{
            alert('Select Category First')
        }
    }
    console.log('selectedCatId',selectedCatId)
    const options = useMemo(() => {
        return categories.map((category) => (
            {label: category.title, value: category.id}
        ))
    }, [categories])

    return (
        <li>
            <div className={s.left}>
                <div className={s.bookmarkTitle}>
                    <img src={URL} height={16} width={16} alt={'bookmark-icon'}/>
                    <span>{bookmark.name}</span>
                </div>
                <Collapse isOpen={showDesc}>
                    <p>{bookmark.description}</p>
                </Collapse>
            </div>
            <div className={s.right}>
                <div>
                    <span className={s.wrap}>
                    {showDesc ?
                        <FcCollapse color={'black'} onClick={onExpandHandler} /> :
                        <FcExpand color={'black'} onClick={onExpandHandler} />}
                    </span>
                </div>
                <div>
                    <span
                        className={s.wrap}
                        onClick={() => setIsOpenModal(true)}
                    >
                      <FaPlusCircle/>
                   </span>
                </div>
            </div>
            <Modal
                openModal={isOpenModal}
                onClose={() => setIsOpenModal(false)}
            >
               <div className={s.addToCategoryContainer}>
                  <h4>Add Bookmark</h4>
                  <div className={s.input}>
                      <select
                          onChange={(e) => setSelectedCatId(e.target.value)}
                      >
                          {
                              options.map(opt => (
                                  <option key={opt.label} value={opt.value}>
                                      {opt.label}
                                  </option>
                              ))
                          }
                      </select>
                  </div>
                   <div className={s.btnContainer}>
                        <Button
                            label={'ADD'}
                            onClick={addToCategory}
                        />
                   </div>
               </div>
            </Modal>
        </li>
    )
}

const CategoryCard = ({
    category,
    bookmarks,
    categories,
    totalCategories,
    isSubscribed,
    addCategoryToDashboard,
    addDefaultBookmarkToCategory
}) => {
    const [isExpandCat, setIsExpandCat] = useState(true);

    const addToMyDashboard = () => {
        console.log('CLick')
        if (!isSubscribed && totalCategories === MAX_CAT) {
            alert('Limit exceeded')
            return
        }
        addCategoryToDashboard(category.id)
    }

    return (
        <div className={s.card}>
            <div className={s.header}>
                <div>
                    <span className={s.wrap}><FaRegEye onClick={() => setIsExpandCat(!isExpandCat)} color={'#a3c93a'}/></span>
                </div>
                <div className={s.title}><span>{category.title}</span></div>
                <div>
                    <span className={s.wrap} onClick={addToMyDashboard}><FaPlusCircle/></span>
                </div>
            </div>
            <Collapse isOpen={isExpandCat}>
                <div className={s.list}>
                    <ul>
                        {
                            bookmarks.map(bookmark => (
                                <Bookmark
                                    key={bookmark.id}
                                    bookmark={bookmark}
                                    categoryId={category.id}
                                    categories={categories}
                                    addDefaultBookmarkToCategory={addDefaultBookmarkToCategory}
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
    console.log('Auth', auth)
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
                        isSubscribed={auth.is_subscribed}
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
