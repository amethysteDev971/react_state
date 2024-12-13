import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/slice/ModalSlice';
import ReadTaskModal from './ReadTaskModal/ReadTaskModal';
import { clearSelectedTask } from '../../redux/slice/TaskSlice'

export default function Modal() {
  const dispatch = useDispatch();
  // const isOpen = useSelector((state) => state.modal.isOpen);
  const {isOpen, readTask} = useSelector((state) => state.modal);

  const handleCloseModal = () => {
    console.log('handleCloseModal => ',)
    dispatch(closeModal());
    dispatch(clearSelectedTask())
  };

  const handleModalClick = (event) => {
    // console.log('handleModalClick => ')
    if (event.target.id === 'modal_container') {
      dispatch(closeModal());
      dispatch(clearSelectedTask())
    }
  };

  

  return (
    <>
      {isOpen && (
        <div id='modal_container' className='' onClick={() => handleModalClick(event)}>
          <div className='modal' onClick={(event) => event.stopPropagation()}>
            <div className='modal_close'>
              <button className='btn-rouge' onClick={(event) => {
                console.log('Close button clicked'); 
                event.stopPropagation(); 
                handleCloseModal(); }}>X</button>
            </div>
                {readTask && <ReadTaskModal/>}
              
          </div>
        </div>
      )}
    </>
  );
}
