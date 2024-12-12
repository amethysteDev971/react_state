import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/slice/ModalSlice';
import Modalcontent from './Modalcontent/Modalcontent';

export default function Modal() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);

  const handleModalClick = (event) => {
    if (event.target.id === 'modal_container') {
      dispatch(closeModal());
    }
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <>
      {isOpen && (
        <div id='modal_container' className='' onClick={handleModalClick}>
          <div className='modal'>
            <header>
              <h1>Hello Modal</h1>
              <div className='modal_close'>
                <button onClick={handleCloseModal}>X</button>
              </div>
              <hr />
            </header>
            <div className='modal_body'>
              <Modalcontent/>
            </div>
            <div className='modal_footer'>
              <button>Reset</button>
              <button className='btn-rouge'>Action</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
