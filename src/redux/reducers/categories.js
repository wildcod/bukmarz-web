import {createError} from './error'
import {createMessage} from './message'
import {getBookmarks} from './bookmarks'
import {dashboardAPI} from '../../api/dashboard'

export const UPLOAD_CATEGORY = 'CATEGORIES/UPLOAD_CATEGORY'
export const GET_CATEGORIES = 'CATEGORIES/GET_CATEGORIES'
export const GET_PRIVATE_CATEGORIES = 'CATEGORIES/GET_PRIVATE_CATEGORIES'
export const ADD_CATEGORY = 'CATEGORIES/ADD_CATEGORY'
export const DELETE_CATEGORY = 'CATEGORIES/DELETE_CATEGORY'
export const UPDATE_CATEGORY = 'CATEGORIES/UPDATE_CATEGORY'


const initialState = {
    category: [],
    privateCategories: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                category: action.payload
            }

        case GET_PRIVATE_CATEGORIES:
            return {
                ...state,
                privateCategories: action.payload
            }

        case DELETE_CATEGORY:
            return {
                ...state,
                category: state.category.filter(
                    (bookmark) => bookmark.id !== action.payload
                )
            }

        case UPLOAD_CATEGORY:
            return {
                ...state,
                category: [...state.category, ...action.payload]
            }

        case ADD_CATEGORY:
            return {
                ...state,
                category: [...state.category, action.payload]
            }

        case UPDATE_CATEGORY:
            return {
                ...state,
                category: [action.payload, ...state.category.filter((category) => category.id !== action.payload.id)]
            }
        default:
            return state
    }
}


const actions = {
    setCategories: (data) => ({type: GET_CATEGORIES, payload: data}),
    deleteCategory: (id) => ({type: DELETE_CATEGORY, payload: id}),
    addCategory: (category) => ({type: ADD_CATEGORY, payload: category}),
    updateCategory: (category) => ({type: UPDATE_CATEGORY, payload: category}),
    importBookmarks: (data) => ({type: UPLOAD_CATEGORY, payload: data})
}

export const getCategories = () => async (dispatch) => {
    try {
        let data = await dashboardAPI.getCategories()
        dispatch(actions.setCategories(data))
    } catch (e) {
        dispatch(createError(e))
    }
}

export const deleteCategory = (id) => async (dispatch) => {
    try {
        await dashboardAPI.deleteCategory(id)
        dispatch(createMessage({categoryDeleted: 'category Deleted'}))
        dispatch(actions.deleteCategory(id))
        return { ok: true }
    } catch (e) {
        dispatch(createError(e))
        return { ok: false }
    }

}

export const addCategory = (body) => async (dispatch) => {
    try {
        let data = await dashboardAPI.saveCategory(body)
        dispatch(createMessage({categoryAdded: 'Category Added'}))
        dispatch(actions.addCategory(data))
        return { ok: true }
    } catch (e) {
        dispatch(createError(e))
        return { ok: false }
    }
}

export const updateCategory = (body, id) => async (dispatch) => {
    try {
        let data = await dashboardAPI.updateCategory(body, id)
        dispatch(createMessage({categoryUpdated: 'Category Updated'}))
        dispatch(actions.updateCategory(data))
        return { ok: true }
    } catch (e) {
        dispatch(createError(e))
        return { ok: false }
    }
}

export const importBookmark = (body) => async (dispatch) => {
    try {
        let data = await dashboardAPI.importBookmarks(body)
        if (data === 'Can not open file') {
            dispatch(createMessage({fileNotValid: 'Can not open imported file'}))
            return { ok : false }
        } else if (data === 'Too many bookmarks') {
            dispatch(createMessage({tooManyData: 'Your file contains to many categories or bookmarks. Upgrade to Premium'}))
            return { ok : false }
        } else {
            dispatch(createMessage({bookmarkUploaded: `Bookmarks Uploaded Successfully`}))
            dispatch(actions.importBookmarks(data))
            dispatch(getBookmarks())
            return { ok : true }
        }
    } catch (e) {
        console.log('Error', e);
        dispatch(createError(e))
        return { ok : false }
    }
}
