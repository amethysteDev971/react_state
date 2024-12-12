import {React, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../../../redux/slice/ModalSlice'
import { setCompletedTask, clearSelectedTask, deleteTask } from '../../../redux/slice/TaskSlice'

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
      {/* <header>
              <h1>Hello Modal</h1>
              
              <hr />
            </header>
            <div className='modal_body'></div> */}
      
      <div className='modal_content_2'>
        <h2>{title} {isChecked && ' : TERMINé'}</h2>
        <p>{description}</p>
        <input type="checkbox" onChange={() => checkHandler()} checked={isChecked} name='' id='checkbox' />
        <div>
          <button type='button' onClick={() => handleEdit()}>Modifier</button>
          <button type='button' onClick={() => handleCompleted(isChecked, id)}>Valider</button>
          <button type='button' onClick={() => handleDelete(id)}>Supprimer</button>
        </div>
      </div>
    </>
  )
}


// </div>
//             <div className='modal_footer'>
//               <button>Reset</button>
//               <button className='btn-rouge'>Action</button>
//             </div>