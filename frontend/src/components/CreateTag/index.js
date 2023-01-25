import React , {useState} from 'react'
import { useDispatch } from 'react-redux'

import { registerTag , getTags, deleteTag} from '../../redux/actions/tagActions'
import OutsideAlerter from '../OutsideAlerter'


function CreateTag(props) {
    const [tagName, setTagName] = useState('')
    const dispatch = useDispatch()

    const submitTagHandler = async (e) => {
        e.preventDefault()
        const repeated = props.tagList.data.filter(item => tagName === item.name)
        if (repeated.length === 0){
          await dispatch(registerTag(tagName))
          dispatch(getTags())
          setTagName('')
        } else{
          window.alert('não vale nome repetido')
        }
      }

      const deleteTagHandler = async (id) =>{
        await dispatch(deleteTag(id))
        dispatch(getTags())
      }

    return (
        <OutsideAlerter hookDisplay={props.setAddTag} >
            <div className={`addTag ${props.addTag}`}>
                <form onSubmit={submitTagHandler}>
                    <div className='inputArea'>
                    <input placeholder='Create tag here' value={tagName} onChange={(e)=>setTagName(e.target.value)} required></input>
                    <button type='submit'><p>Add tag</p></button>
                    </div>
                </form>
                <div className='tags'>
                    {
                    props.tagList.data.map((item)=>
                        <div key={item.name} className='tag'>
                        <p>{item.name}</p>
                        <button onClick={() => deleteTagHandler(item._id)}>x</button>
                        </div>
                    )
                    }
                </div>
            </div>
        </OutsideAlerter>
  )
}

export default CreateTag