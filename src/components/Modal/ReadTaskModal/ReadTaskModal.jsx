import {React, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../../../redux/slice/ModalSlice'
import { setCompletedTask, clearSelectedTask, deleteTask } from '../../../redux/slice/TaskSlice'
import './ReadTaskModal.css'

export default function ReadTaskModal() {

  const dispatch = useDispatch()
  // const {selectedTask} = useSelector((state) => state.task)
  // const {id, title, description, completed } = selectedTask
  const {id, title, description, completed } = useSelector((state) => state.task.selectedTask)
  const [isChecked, setIsChecked] = useState(completed)
  
  const checkHandler = () => {
    setIsChecked(!isChecked)
  }

  const handleEdit = () => {

  }

  const handleCompleted = (value,id) => {
    dispatch(setCompletedTask({value,id}))
    dispatch(closeModal())
    dispatch(clearSelectedTask())
  }

  const handleDelete = (id) => {
    dispatch(closeModal())
    dispatch(deleteTask(id))
    dispatch(clearSelectedTask())
    
  }

  return (
    <>
      <header>
        <h1>{title} {isChecked && ' : TERMINé'}</h1>   
        <hr />
      </header>    
      <div className='modal_body'>
        <div className='modal_content_2'>
          <p>{description}</p>
          <div className='flex-inline f-center'>
            <input type="checkbox" onChange={() => checkHandler()} checked={isChecked} name='completed' id='checkbox'/><label htmlFor="radio">Tâche terminée</label>
          </div>
        </div>
      </div>
      <div className='modal_footer'>
            <button className='btn-gris' type='button' onClick={() => handleEdit()}>Modifier</button>
            <button className='btn-vert ' type='button' onClick={() => handleCompleted(isChecked, id)}>Valider</button>
            <button className='btn-rouge ' type='button' onClick={() => handleDelete(id)}>Supprimer</button>
      </div>
    </>
  )
}


// </div>
//             <div className='modal_footer'>
//               <button>Reset</button>
//               <button className='btn-rouge'>Action</button>
//             </div>