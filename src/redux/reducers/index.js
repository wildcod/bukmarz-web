import {combineReducers} from 'redux'
import AuthReducer from './auth'
import ErrorReducer from './error'
import MessageReducer from './message'
import LoadingReducer from './loading'
import AppReducer from './appReducer'
import BookmarksReducer from './bookmarks'
import SubscriptionsReducer from './subscriptions'
import CategoriesReducer from './categories'

export default combineReducers({
    auth: AuthReducer,
    errors: ErrorReducer,
    messages: MessageReducer,
    loading: LoadingReducer,
    app: AppReducer,
    bookmarks: BookmarksReducer,
    subscriptions: SubscriptionsReducer,
    categories: CategoriesReducer
})