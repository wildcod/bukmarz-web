import instance from './index'

export const dashboardAPI = {
    getBookmarks() {
        return instance.get(`bookmark`).then(res => res.data)
    },

    deleteBookmark(id) {
        return instance.delete(`bookmark/${id}/`)
    },

    saveBookmark(data) {
        return instance.post(`bookmark/`, data).then(res => res.data)
    },

    updateBookmark(data, id) {
        return instance.put(`bookmark/${id}/`, data).then(res => res.data)
    },

    getCategories() {
        return instance.get(`category`).then(res => res.data)
    },

    deleteCategory(id) {
        return instance.delete(`category/${id}/`).then(res => res.data)
    },

    saveCategory(data) {
        return instance.post(`category/`, data).then(res => res.data)
    },

    updateCategory(data, id) {
        return instance.put(`category/${id}/`, data).then(res => res.data)
    },

    importBookmarks(data) {
        return instance.post(`import/`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data)
    },

    addBookmarkFromExtension(body) {
        return instance.post(`import/add_bookmark/`, body).then(res => res.data)
    },

    getEmailBookmarks() {
        return instance.get(`email_bookmarks`).then(res => res.data)
    },

    deleteEmailBookmark(id){
        return instance.delete(`email_bookmarks/${id}/`)
    }
}
