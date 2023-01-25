import React  from 'react'
import OutsideAlerter from '../../OutsideAlerter'
import { deleteDocument } from '../../../redux/actions/documentActions'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

function DeleteWindow(props) {
    const dispatch = useDispatch()
    const deleteDocHandler = async (id) =>{
        await dispatch(deleteDocument(id))
        props.getDocument()
      }

  return (
    <div className={`alertBackground ${props.alertWindow}`}>
          <OutsideAlerter hookDisplay={props.setAlertWindow}>
            <div className='alertWindow'>
              <p>Tem certeza de que deseja excluir o item?</p>
              <div className='divButtons'>
                <button onClick={() => {deleteDocHandler(props.actualEdit);props.setAlertWindow('none')}}>Sim</button>
                <button onClick={() => props.setAlertWindow('none')}>Não</button>
              </div>
            </div>
          </OutsideAlerter>
        </div>
  )
}

export default DeleteWindow