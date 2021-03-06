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
import Button from "../../../../../common/button/Button";
import AddCategory from "../add-category/AddCategory";
import AddBookmark from "./bookmark-actions/AddBookmark";
const BASE_URL = "https://www.google.com/s2/favicons?domain="


const Bookmark = ({onModalHandler, bookmark, setSelectedBookmark}) => {
    const [showDesc, setShowDesc] = useState(false)

    const onExpandHandler = () => {
        setShowDesc(!showDesc)
    }

    return (
        <li>
            <div className={s.left}>
                <div className={s.bookmarkTitle}>
                    <img src={`${BASE_URL}${bookmark.url}`} height={16} width={16} alt={'bookmark-icon'}/>
                    <span>{bookmark.name}</span>
                </div>
                {
                    showDesc && <p>{bookmark.description}</p>
                }
            </div>
            <div className={s.right}>
                <div>
                    {showDesc ?
                        <FcCollapse color={'black'} onClick={onExpandHandler} /> :
                        <FcExpand color={'black'} onClick={onExpandHandler} />}
                </div>
                <div>
                    <GrEdit
                      color={'black'}
                      onClick={() => {
                          setSelectedBookmark(bookmark)
                          onModalHandler(MODAL.EDIT_BOOKMARK)
                      }}
                    />
                  </div>
                <div>
                    <FaRegTrashAlt
                        color={'red'}
                        onClick={() => {
                            setSelectedBookmark(bookmark)
                            onModalHandler(MODAL.DELETE_BOOKMARK)
                        }}
                    />
                </div>
            </div>
        </li>
    )
}



const CardCategory = ({
  category,
  bookmarks,
  auth,
  updateCategory,
  isPrivate,
  deleteCategory,
  addBookmark,
  deleteBookmark,
  updateBookmark
}) => {
    const [isExpandCat, setIsExpandCat] = useState(true);
    const [openModal, setOpenModal] = useState(false);
    const [activeModal, setActiveModal] = useState(MODAL.DELETE_CAT)
    const [selectedBookmark, setSelectedBookmark] = useState({})

    const onCloseModal = useCallback( () => {
        setOpenModal(false)
    }, [])

    const getComponent = useCallback(() => {
        switch (activeModal){
            case MODAL.EDIT_CAT:
                return <EditCat
                         category={category}
                         isPrivate={isPrivate}
                         auth={auth}
                         onClose={onCloseModal}
                         updateCategory={updateCategory}
                        />
            case MODAL.DELETE_BOOKMARK :
                return <DeleteBookmark
                           bookmarkId={selectedBookmark.id}
                           deleteBookmark={deleteBookmark}
                           onClose={onCloseModal}
                        />
            case MODAL.EDIT_BOOKMARK:
                return <EditBookmark
                           bookmark={selectedBookmark}
                           updateBookmark={updateBookmark}
                           onClose={onCloseModal}
                           categoryId={category.id}
                       />
            case MODAL.ADD_BOOKMARK:
                return <AddBookmark
                            catId={category.id}
                            addBookmark={addBookmark}
                            onClose={onCloseModal}
                       />
            default :
                return <DeleteCat
                        catId={category.id}
                        deleteCategory={deleteCategory}
                        onClose={onCloseModal}
                      />
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
                    <div className={s.title}><span>{category?.title}</span></div>
                    {
                        auth?.is_subscribed &&
                            <div>
                                <FaShareAlt onClick={() => onModalHandler()} />
                            </div>
                    }
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
                            {
                                bookmarks.map(bookmark => (
                                    <Bookmark
                                        key={bookmark.id}
                                        bookmark={bookmark}
                                        setSelectedBookmark={setSelectedBookmark}
                                        onModalHandler={onModalHandler}
                                    />
                                ))
                            }
                        </ul>
                        {
                         !bookmarks.length && <span>No bookmarks stored!</span>
                        }
                    </div>
                </Collapse>
            </div>
            <div className={s.addBtnContainer}>
                <Button
                    label={'Add Bookmarks'}
                    onClick={() => onModalHandler(MODAL.ADD_BOOKMARK)}
                />
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