import React, {useCallback, useMemo, useState} from "react";
import s from "./CardCategory.module.scss";
import {FaRegEye, FaRegTrashAlt, FaShareAlt} from "react-icons/fa";
import {FcExpand,FcCollapse } from "react-icons/fc";
import {GrEdit} from "react-icons/gr";
import { Collapse } from 'react-collapse';
import Modal from "../../../../../common/Modal/Modal";
import {MODAL} from "../../../../../../constants/modal";
import DeleteCat from "./category-actions/DeleteCat";
import EditCat from "./category-actions/EditCat";
import EditBookmark from "./bookmark-actions/EditBookmark";
import DeleteBookmark from "./bookmark-actions/DeleteBookmark";
const URL = "https://www.google.com/s2/favicons?domain=https://google.com"


const Bookmark = ({onModalHandler}) => {
    const [showDesc, setShowDesc] = useState(false)

    const onExpandHandler = () => {
        setShowDesc(!showDesc)
    }

    return (
        <li>
            <div className={s.left}>
                <div className={s.bookmarkTitle}>
                    <img src={URL} height={16} width={16} alt={'bookmark-icon'}/>
                    <span>Faded</span>
                </div>
                {
                    showDesc && <p>Description about bookmark</p>
                }
            </div>
            <div className={s.right}>
                <div>
                    {showDesc ?
                        <FcCollapse color={'black'} onClick={onExpandHandler} /> :
                        <FcExpand color={'black'} onClick={onExpandHandler} />}
                </div>
                <div><GrEdit color={'black'} onClick={() => onModalHandler(MODAL.EDIT_BOOKMARK)} /></div>
                <div><FaRegTrashAlt color={'red'} onClick={() => onModalHandler(MODAL.DELETE_BOOKMARK)}  /></div>
            </div>
        </li>
    )
}



const CardCategory = () => {
    const [isExpandCat, setIsExpandCat] = useState(true);
    const [openModal, setOpenModal] = useState(false);
    const [activeModal, setActiveModal] = useState(MODAL.DELETE_CAT)

    const getComponent = useCallback(() => {
        switch (activeModal){
            case MODAL.EDIT_CAT: return <EditCat />
            case MODAL.DELETE_BOOKMARK : return <DeleteBookmark />
            case MODAL.EDIT_BOOKMARK: return <EditBookmark />
            default : return <DeleteCat />
        }
    }, [activeModal])

    const onModalHandler = (modalType) => {
        setActiveModal(modalType)
        setOpenModal(true)
    }

    return (
        <div className={s.cardCatWrapper}>
            <div className={s.body}>
                <div className={s.header}>
                    <div>
                        <FaRegEye onClick={() => setIsExpandCat(!isExpandCat)} color={'#a3c93a'}/>
                    </div>
                    <div className={s.title}><span>Music</span></div>
                    {/*<div>*/}
                    {/*    <FaShareAlt onClick={() => onModalHandler()} />*/}
                    {/*</div>*/}
                    <div>
                        <GrEdit color={'black'} onClick={() => onModalHandler(MODAL.EDIT_CAT)} />
                    </div>
                    <div>
                        <FaRegTrashAlt color={'red'} onClick={() => onModalHandler(MODAL.DELETE_CAT)} />
                    </div>
                </div>
                <Collapse isOpened={isExpandCat} hasNestedCollapse>
                    <div className={s.list}>
                        <ul>
                           <Bookmark onModalHandler={onModalHandler}/>
                        </ul>
                    </div>
                </Collapse>
            </div>
            <div className={s.btnContainer}>

            </div>
            <Modal
                openModal={openModal}
                onClose={() => setOpenModal(false)}
            >
                {getComponent()}
            </Modal>
        </div>
    )
}

export default CardCategory;