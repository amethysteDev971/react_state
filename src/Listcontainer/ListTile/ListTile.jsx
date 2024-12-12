import React from 'react'
import { useDispatch } from 'react-redux'
import { openReadModal } from '../../redux/slice/ModalSlice'
import { readTask } from '../../redux/slice/TaskSlice'
import './ListTile.css'

export default function ListTile({item, deleteAction}) {
   
  const dispatch = useDispatch();

  const handleDelete = (id) => {
      deleteAction(id)
  }

  const handleOpenModal = (id) => {
    console.log('handleOpenModal')
    dispatch(readTask(id))
    dispatch(openReadModal());
  };

  return (

       <div className='tile'>
            <p>{item.title}</p>
            <div className='action'>
              <button onClick={()=>handleOpenModal(item.id)} className='btn-rouge'>modal</button>
              <button onClick={()=>handleDelete(item.id)}>delete</button>
            </div>
        </div> 
  
  )

}
