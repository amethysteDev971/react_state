import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../redux/slice/ModalSlice';
import { setCompletedTask, clearSelectedTask, deleteTask, updateTask } from '../../../redux/slice/TaskSlice';
import './ReadTaskModal.css';

export default function ReadTaskModal() {
  const dispatch = useDispatch();
  const { id, title, description, completed } = useSelector((state) => state.task.selectedTask);
  const [isChecked, setIsChecked] = useState(completed);
  const [isEditing, setIsEditing] = useState(false); // Gérer le mode édition
  const [editedTitle, setEditedTitle] = useState(title); // Titre en cours d'édition
  const [editedDescription, setEditedDescription] = useState(description); // Titre en cours d'édition

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  const handleEdit = () => {
    setIsEditing(true); // Active le mode édition
  };

  const handleSave = (id) => {
    // Sauvegarde le nouveau titre (vous pouvez ajouter une action Redux ici)
    console.log('id:',id)
    console.log('New Title:', editedTitle);
    console.log('Description: ', editedDescription)
    console.log('checked:', isChecked)
    dispatch(updateTask({id:id,title:editedTitle,description:editedDescription,isChecked:isChecked}))
    
    setIsEditing(false); // Désactive le mode édition
    handleCloseModal()
  };

  const handleCancel = () => {
    setEditedTitle(title); // Réinitialise le titre original
    setIsEditing(false); // Désactive le mode édition
  };

  const handleCompleted = (value, id) => {
    dispatch(setCompletedTask({ value, id }));
    dispatch(closeModal());
    dispatch(clearSelectedTask());
  };

  const handleDelete = (id) => {
    dispatch(closeModal());
    dispatch(deleteTask(id));
    dispatch(clearSelectedTask());
  };

  const handleCloseModal = () => {
    console.log('handleCloseModal => ',)
    dispatch(closeModal());
    dispatch(clearSelectedTask())
  };

  return (
    <>
      <header>
        {isEditing ? (
          <div className="edit-title-container">
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="edit-title-input"
            />
          </div>
        ) : (
          <h1 id="title">
            {editedTitle} {isChecked && ' : TERMINé'}
          </h1>
        )}
        <hr />
      </header>
      <div className="modal_body">
        <div className="modal_content_2">
        {isEditing ? (
          <div className="edit-description-container">
          <textarea 
            name="update_description" 
            id="update_description" 
            value={editedDescription} 
            cols="90" 
            rows="10"
            onChange={(e) => setEditedDescription(e.target.value)}
            ></textarea>
        </div>
        ) : (
          <p>{description}</p>
        )}
          <div className="flex-inline f-center">
            <input
              type="checkbox"
              onChange={checkHandler}
              checked={isChecked}
              name="completed"
              id="checkbox"
            />
            <label htmlFor="checkbox">Tâche terminée</label>
          </div>
        </div>
      </div>
      <div className="modal_footer">
        {isEditing ? (
          <>
            <button className="btn-vert" type="button" onClick={() =>handleSave(id)}>
              Sauvegarder
            </button>
            <button className="btn-gris" type="button" onClick={handleCancel}>
              Annuler
            </button>
          </>
        ) : (
          <>
            <button className="btn-gris" type="button" onClick={handleEdit}>
              Modifier
            </button>
            <button className="btn-vert" type="button" onClick={() => handleCompleted(isChecked, id)}>
              Valider
            </button>
            <button className="btn-rouge" type="button" onClick={() => handleDelete(id)}>
              Supprimer
            </button>
          </>
        )}
      </div>
    </>
  );
}









































// import {React, useState} from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { closeModal } from '../../../redux/slice/ModalSlice'
// import { setCompletedTask, clearSelectedTask, deleteTask } from '../../../redux/slice/TaskSlice'
// import './ReadTaskModal.css'

// export default function ReadTaskModal() {

//   const dispatch = useDispatch()
//   // const {selectedTask} = useSelector((state) => state.task)
//   // const {id, title, description, completed } = selectedTask
//   const {id, title, description, completed } = useSelector((state) => state.task.selectedTask)
//   const [isChecked, setIsChecked] = useState(completed)
  
//   const checkHandler = () => {
//     setIsChecked(!isChecked)
//   }

//   const handleEdit = (id) => {
//     console.log('handleEdit() et id = ', id)
//     let value = document.getElementById('title').innerHTML;
//     console.log(value)

//   }

//   const handleCompleted = (value,id) => {
//     dispatch(setCompletedTask({value,id}))
//     dispatch(closeModal())
//     dispatch(clearSelectedTask())
//   }

//   const handleDelete = (id) => {
//     dispatch(closeModal())
//     dispatch(deleteTask(id))
//     dispatch(clearSelectedTask())
    
//   }

//   return (
//     <>
//       <header>
//         <h1 id='title'>{title} {isChecked && ' : TERMINé'}</h1>   
//         <hr />
//       </header>    
//       <div className='modal_body'>
//         <div className='modal_content_2'>
//           <p>{description}</p>
//           <div className='flex-inline f-center'>
//             <input type="checkbox" onChange={() => checkHandler()} checked={isChecked} name='completed' id='checkbox'/><label htmlFor="radio">Tâche terminée</label>
//           </div>
//         </div>
//       </div>
//       <div className='modal_footer'>
//             <button className='btn-gris' type='button' onClick={() => handleEdit({id})}>Modifier</button>
//             <button className='btn-vert ' type='button' onClick={() => handleCompleted(isChecked, id)}>Valider</button>
//             <button className='btn-rouge ' type='button' onClick={() => handleDelete(id)}>Supprimer</button>
//       </div>
//     </>
//   )
// }


// // </div>
// //             <div className='modal_footer'>
// //               <button>Reset</button>
// //               <button className='btn-rouge'>Action</button>
// //             </div>