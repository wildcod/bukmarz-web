import React from 'react';
import s from "../CardCategory.module.scss";
import Button from "../../../../../../common/button/Button";

const DeleteCat = () => {
    return (
        <div className={s.editCatContainer} style={{padding: '10px 0'}}>
            <h3 className={s.modalHeader}>Are you sure you want to delete this category?</h3>
            <div className={s.btnContainer}>
                <Button label={'Delete'} className={'delete'}/>
            </div>
        </div>
    );
};

export default DeleteCat;