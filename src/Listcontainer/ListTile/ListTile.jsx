import React from 'react'
import { useDispatch } from 'react-redux'
import { openModal } from '../../redux/slice/ModalSlice'
import { readTaskById } from '../../redux/slice/TaskSlice'
import './ListTile.css'

export default function ListTile({item, deleteAction}) {
   
  const dispatch = useDispatch();
  // const isOpen = useSelector((state) => state.modal.isOpen);

  const handleDelete = (id) => {
      deleteAction(id)
  }

  const handleOpenModalRead = (id) => {
    console.log('handleOpenModalRead()')
    console.log('id => ', id);
    const action = 'read'
    dispatch(openModal(action));
    dispatch(readTaskById(id));
    
  };

  return (

       <div className='tile'>
            <p>{item.title}</p>
            <div className='action'>
              <button onClick={() =>handleOpenModalRead(item.id)} className='btn-rouge'>Voir</button>
              <button onClick={()=>handleDelete(item.id)}>delete</button>
            </div>
        </div> 
  
  )

}
