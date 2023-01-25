import React from 'react'
import { useDispatch} from 'react-redux'

import OutsideAlerter from '../OutsideAlerter'
import { registerDocument ,updateDocument} from '../../redux/actions/documentActions'
import send from '../../assets/images/send.svg'


function CreateText(props) {
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${year}-${month}-${day}`;
    dispatch(registerDocument(props.title,props.text,currentDate,props.tag))
    props.getDocument()
    props.setDisplay('none')
  }

  const submitEditHandler = (e) => {
    e.preventDefault()
    dispatch(updateDocument(props.title,props.text,props.actualEdit,props.tag))
    props.getDocument()
    props.setDisplay('none')
  }

  return (
    <OutsideAlerter hookDisplay={props.setDisplay}>

          <div className={`createDocument ${props.display}`}>
            <form onSubmit={props.editOrCreate==='create'?submitHandler: submitEditHandler}>
              <div>
            
                <input placeholder='Título' type='text' required value={props.title} onChange={(e)=>props.setTitle(e.target.value)}></input>
                <select value={props.tag?props.tag:0} onChange={(e) => props.setTag(e.target.value)}>
                  
                  <option value={0}>Tag name</option>
                  {props.tagList.data.map((item, index)=>
                  
                  <option key={index} value={item._id}>{item.name}</option>
                  )}
                </select>
              </div>
              <textarea value={props.text} onChange={(e)=>props.setText(e.target.value)} placeholder='What are you studyng?' type='text' required></textarea>
              <button type='submit'>
                <img src={send} alt='img'></img>
                <p>Enviar</p>
              </button>
            </form>
          </div>
        </OutsideAlerter>
  )
}

export default CreateText