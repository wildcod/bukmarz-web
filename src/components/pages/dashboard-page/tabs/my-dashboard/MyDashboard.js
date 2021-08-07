import React, {useCallback, useEffect, useMemo} from 'react';
import s from './MyDashboard.module.scss'
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import LeftPanel from "./left-panel/LeftPanel";
import CardCategory from "./card-category/CardCategory";
import categories, {addCategory, deleteCategory, getCategories, updateCategory} from '../../../../../redux/reducers/categories'
import {addBookmark, deleteBookmark, getBookmarks, updateBookmark} from '../../../../../redux/reducers/bookmarks'
import {getUserSubscriptionDetails} from '../../../../../redux/reducers/auth'
import { connect } from 'react-redux'

const MyDashboard = ({
 subscriptions,
 userSubscription,
 categories,
 getBookmarks,
 getUserSubscriptionDetails,
 getCategories,
 bookmarks,
 auth
}) => {

    const {maxCategoriesStored, maxBookmarksInOneCategory} = useMemo(() => {
        let subscription
        console.log(userSubscription)
        if (!userSubscription)
            subscription = subscriptions.filter(s => s.name === 'Basic')
        else {
            subscription = subscriptions.filter(s => s.name === 'Premium')
        }

        if (subscription.length > 0)
            subscription = subscription[0]

        let {max_categories_stored, max_bookmarks_in_one_category} = subscription
        if (max_bookmarks_in_one_category === 0) max_categories_stored = Infinity
        if (max_bookmarks_in_one_category === 0) max_bookmarks_in_one_category = Infinity
        return {max_categories_stored, max_bookmarks_in_one_category}
    }, [userSubscription, subscriptions])

    const [firstColumnCategories, secondColumnCategories, thirdColumnCategories ] = useMemo(() => {
        const firstColumnCat = categories?.filter((category, index) => index % 3 === 0)
        const secondColumnCat = categories?.filter((category, index) => index % 3 === 1)
        const thirdColumnCat = categories?.filter((category, index) => index % 3 === 2)
        return [firstColumnCat, secondColumnCat, thirdColumnCat]
    }, [categories])

    const categoriesColumn = useCallback((categories) =>
            categories?.map((category) => (
                    <CardCategory
                        key={category.id}
                        category={category}
                        auth={auth}
                        bookmarks={bookmarks.filter((book) => book.category === category.id)}
                    />
            ))
    , [])

    useEffect(() => {
        getCategories()
        getBookmarks()
        getUserSubscriptionDetails()
    }, [])

    return (
        <div className={s.dashBoardContainer}>
           <div className={s.left}>
               <LeftPanel />
           </div>
           <div className={s.right}>
               <div className={s.gridContainer}>
                   <div className={s.col}>
                       {categoriesColumn(firstColumnCategories)}
                   </div>
                   <div className={s.col}>
                       {categoriesColumn(secondColumnCategories)}
                   </div>
                   <div className={s.col}>
                       {categoriesColumn(thirdColumnCategories)}
                   </div>
               </div>
           </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    auth: state.auth.user,
    bookmarks: state.bookmarks.bookmarks,
    subscriptions: state.subscriptions.subscriptions,
    userSubscription: state.auth.userSubscription,
    categories: state.categories.category
})

export default connect(mapStateToProps, {
    getCategories,
    deleteCategory,
    updateCategory,
    addCategory,
    addBookmark,
    getBookmarks,
    updateBookmark,
    deleteBookmark,
    getUserSubscriptionDetails,
})(MyDashboard)