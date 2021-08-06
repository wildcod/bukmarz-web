import React from 'react';
import s from "../CardCategory.module.scss";
import Button from "../../../../../../common/button/Button";

const EditBookmark = () => {
    return (
        <div className={s.editCatContainer}>
            <h3 className={s.modalHeader}>Edit Bookmark</h3>
            <form className={s.modalBody}>
                <div className={s.inputContainer}>
                    <label>Name</label>
                    <input type={'text'} placeholder={'Name'}/>
                </div>
                <div className={s.inputContainer}>
                    <label>Url</label>
                    <input type={'text'}  placeholder={'Url'}/>
                </div>
                <div className={s.inputContainer}>
                    <label>Description</label>
                    <input type={'text'}  placeholder={'Description'}/>
                </div>
                <div className={s.btnContainer}>
                    <Button label={'Update'} />
                </div>
            </form>
        </div>
    );
};

export default EditBookmark;