import React from 'react'
import { useDispatch } from 'react-redux'
import { openModal } from '../../redux/slice/ModalSlice'
import './ListTile.css'

export default function ListTile({item, deleteAction}) {
   
  const dispatch = useDispatch();

  const handleDelete = (id) => {
      deleteAction(id)
  }

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (

       <div className='tile'>
            <p>{item.title}</p>
            <div className='action'>
              <button onClick={handleOpenModal} className='btn-rouge'>Voir</button>
              <button onClick={()=>handleDelete(item.id)}>delete</button>
            </div>
        </div> 
  
  )

}
