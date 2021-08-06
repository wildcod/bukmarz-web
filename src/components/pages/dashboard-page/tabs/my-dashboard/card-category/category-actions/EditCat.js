import React from 'react';
import s from '../CardCategory.module.scss'
import Button from "../../../../../../common/button/Button";

const EditCat = () => {
    return (
        <div className={s.editCatContainer}>
            <h3 className={s.modalHeader}>Edit Category</h3>
            <form className={s.modalBody}>
               <div className={s.inputContainer}>
                   <label>Title</label>
                   <input type={'text'} placeholder={'Title'}/>
               </div>
                <div className={s.inputContainer}>
                    <label>Color</label>
                    <input type={'color'}/>
                </div>
                <div className={s.btnContainer}>
                    <Button label={'Update'} />
                </div>
            </form>
        </div>
    );
};

export default EditCat;