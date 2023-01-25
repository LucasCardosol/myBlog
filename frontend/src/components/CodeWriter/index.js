import React , {useState} from 'react'
import { useDispatch } from 'react-redux'
import { postCode } from '../../redux/actions/codeActions.js'
import {languages} from '../../constants/listLanguages.js'

function CodeWriter(props) {
    const [language, setLanguage] = useState(0)
    const [textCode, setTextCode] = useState('')
    const dispatch = useDispatch()

    const submitCode = (e) => {
        e.preventDefault()
        console.log(textCode, language,props.order, props.document)
      dispatch(postCode(textCode, language,props.order, props.document))
      
    
    }

    return (
      <form onSubmit={submitCode} className='formCode'>
        <textarea value={textCode} onChange={(e) => setTextCode(e.target.value)} placeholder='Digite seu código aqui'></textarea>
        <div>
          <button type='submit'>Salvar</button>
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            {console.log(language)}
            <option value={0}>Linguagem</option>
            {
              languages.map((lang,index) => 
                <option key={index} value={lang}>{lang}</option>
              )
            }
          </select>
        </div>
      </form> 
    )
}

export default CodeWriter