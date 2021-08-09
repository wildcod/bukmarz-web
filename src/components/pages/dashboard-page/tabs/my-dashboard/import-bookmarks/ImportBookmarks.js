import React, {useState} from 'react';
import Button from '../../../../../common/button/Button'
import s from './ImportBookmarks.module.scss'

const ImportBookmarks = ({
     importBookmark,
     onClose
 }) => {
    const [file, setFile] = useState(null)
    const [category, setCategory] = useState('')

    const onFileHandler = (e) => {
        const name = e.target.files[0].name
        const file = e.target.files[0]
        if (name.slice(name.length - 4, name.length) === 'html') {
            setFile(file)
        } else {
            alert('Please load HTML files only')
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append('file', file, file.name);
        data.append('category', category);
        importBookmark(data)
            .then((res) => {
                res.ok && onClose()
                if(!res.ok){

                }
            })
    }

    return (
        <div className={s.importBookmarks}>
           <h3>Import Your Bookmarks</h3>
            <form className={s.body} onSubmit={onSubmit}>
               <span className={s.note}>Note: Export your browser bookmarks as <b>.html</b> file</span>
               <span className={s.title}>Select the file</span>
               <input
                   type={'file'}
                   accept={'.html'}
                   name={'bookmark'}
                   onChange={onFileHandler}
                   required
               />
               <input
                   type={'text'}
                   required
                   name={'category'}
                   minLength={5}
                   maxLength={30}
                   onChange={(e) => setCategory(e.target.value)}
                   placeholder={'Please enter a category upto 30 char'}
               />
               <div className={s.btnContainer}>
                   <Button label={'IMPORT'} type={'submit'}/>
               </div>
            </form>
        </div>
    );
};

export default ImportBookmarks;