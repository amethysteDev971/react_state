import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/slice/ModalSlice';
import ReadTaskModal from './ReadTaskModal/ReadTaskModal';
import { clearSelectedTask } from '../../redux/slice/TaskSlice'

export default function Modal() {
  const dispatch = useDispatch();
  // const isOpen = useSelector((state) => state.modal.isOpen);
  const {isOpen, readTask} = useSelector((state) => state.modal);

  const handleModalClick = (event) => {
    if (event.target.id === 'modal_container') {
      dispatch(closeModal());
      dispatch(clearSelectedTask())
    }
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
    dispatch(clearSelectedTask())
  };

  return (
    <>
      {isOpen && (
        <div id='modal_container' className='' onClick={handleModalClick}>
          <div className='modal'>
            <div className='modal_close'>
              <button onClick={handleCloseModal}>X</button>
            </div>
                {readTask && <ReadTaskModal/>}
              
          </div>
        </div>
      )}
    </>
  );
}
