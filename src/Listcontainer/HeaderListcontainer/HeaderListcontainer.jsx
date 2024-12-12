import React, { useState } from 'react'
import './HeaderListcontainer.css'

export default function HeaderListcontainer({lastId, addItem}) {

    // const [state, setState] = useState();
    const [addMode, setAddMode] = useState(false);

    function toggleaddMode() {
        // Afficher le formulaire
        setAddMode(!addMode);
    }

    const createTask = (task) => {
        console.log('Ajouter')
        const value = document.querySelector('#createTask').value
        console.log('value => ',value)
        
        addItem({
            id: lastId + 1,
            title: value,
            description:"lorem ipsum",
            completed: false
        })
        toggleaddMode()
    }

  return (
    <header>
            <div className='flex mb-20'>
                <p>Header du container de liste de tâche</p>
                <button
                    onClick={()=>toggleaddMode()}
                    className='newTask'>{addMode ? 'hide' : 'add'}
                </button>
            </div>
            <div className='flex form_add'>
                {addMode && <input id='createTask' className='addInput' type="text" placeholder='Nouvelle tâche...'/>}
                {addMode && <button  onClick={()=>createTask()}>Add</button>}
            </div>
            
            
    </header>
  )
}
