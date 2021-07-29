import React, {useEffect} from 'react';
import ReactModal from 'react-modal';
import style from './Modal.module.scss'
import closeIconSrc from '../../../assets/img/close.svg'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const Modal = ({ openModal , onClose, children }) => {
    function closeModal() {
        onClose()
    }

    useEffect(() => {
        if(openModal){
            document.body.classList.add('body-overflow');
        }
        return () => {
            document.body.classList.remove('body-overflow');
        }
    }, [openModal])

    return openModal ?
                <ReactModal
                    isOpen={openModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                >
                  <div className={style.innerContainer}>
                      <div className={style.close} onClick={onClose}>
                          <img
                              src={closeIconSrc}
                              loading="lazy"
                              width={40}
                              alt={'close'}
                              height={40}
                          />
                      </div>
                      {children}
                  </div>
                </ReactModal> : null
};

export default Modal;