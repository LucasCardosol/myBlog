import React, {useState} from 'react'
import { ItemStyle } from '../../pages/home/style'
import { useDispatch, useSelector } from 'react-redux'
import { getImagesAction } from '../../redux/actions/documentActions'

//dmSerif
//lexend

function TextItem(props) {
  const data = props.data
  const [textLimit, setTextLimit] = useState(true)
  const textCut = data.text.length>525?data.text.slice(0,525):false
  const [year, month, day] = data.date.split('-',3)
  const listMonths = {
    "01":"JAN",
    "02":"FEB",
    "03":"MAR",
    "04":"APR",
    "05":"MAY",
    "06":"JUN",
    "07":"JUL",
    "08":"AUG",
    "09":"SEP",
    "10":"OCT",
    "11":"NOV",
    "12":"DEC",
  }

  const dispatch = useDispatch()
  const imageList = useSelector(state => state.imageList)
  const {error, loading, info} = imageList


  function getImage(){
    
    setTextLimit(false)
    dispatch(getImagesAction(data._id))
  }

  

  function interpreter() {
    let text = data.text.split('##img##',3)
    return (
      <>
      {
        text.map((item, index) => 
          <div key={index}>
          {item}
          {text.length > index+1 ? <div className='square'></div>:<></>}
          </div>
        )
      }
      </>
    )
    
  }
  
  return (
    <ItemStyle>
      <div className='boxText'>
        <div className='dateArea'>
          <h1 className='lexend'>{day}<br/>{listMonths[month]}</h1>
          <span className='lexend'>@samurai2099</span>
        </div>
        <div className='textArea'>
          <h1 className='dmSerif'>
            {data.title}
          </h1>
          <div>
          <p className='text'>
            {console.log(!(props.actualOpen===data._id),props.actualOpen,data._id)}
            <span>
              {textCut && textLimit? textCut: interpreter()}
            </span>
            {
              textCut?
                textLimit?
                <button onClick={getImage}><p>...read more</p></button>:
                <button onClick={() => setTextLimit(true)}><p>...read less</p></button>
              :<></>
            }
          </p>
          </div>
          
        </div>
      </div>
      <div>
        <div className='divButtons'>
          <button>Editar</button>
          <button>Excluir</button>
        </div>
      </div>
    </ItemStyle>
    
  )
}

export default TextItem