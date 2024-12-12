import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Modalcontent() {
    const action = useSelector((state) => state.modal.action);
    console.log('action.read => ', action.read);
  return (
    <>
        <div>Modalcontent</div>
        {action.read && ( 
            <div>READ</div>
        )}

    </>
  )
}
