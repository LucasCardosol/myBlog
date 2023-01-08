import React , {useEffect, useState , useLayoutEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDocumentsAction,registerDocument,getImagesAction ,registerImage} from '../../redux/actions/documentActions'

import { ItemStyle } from './style'
import OutsideAlerter from '../../components/OutsideAlerter'
import plus from '../../assets/images/plus.svg'
import search from '../../assets/images/search.svg'
import tranding from '../../assets/images/tranding.svg'
import circle from '../../assets/images/Ellipse.svg'
import menu from '../../assets/images/menu.png'
import xbutton from '../../assets/images/x.svg'
import send from '../../assets/images/send.svg'


function Home() {
  const [menuState, setMenuState] = useState(false)
  const [readyLoaded, setReadyLoaded] = useState(false)
  const [display, setDisplay] = useState('none')
  const [title,setTitle] = useState('')
  const [text,setText] = useState('')
  const dispatch = useDispatch()
  const documentList = useSelector(state => state.documentList)
  const {error, loading, data} = documentList
  const imageList = useSelector(state => state.imageList)
  const [actualOpen,setActualOpen] = useState(0)
  const [upLoadImage,setUpLoadImage] = useState([])
  const baseUrl = "http://127.0.0.1:8000/static"
  
  useEffect(()=>{
    dispatch(getDocumentsAction())
  },[dispatch])
  
  useLayoutEffect(()=>{
    if(actualOpen !== 0){dispatch(getImagesAction(actualOpen))}
  },[actualOpen])

  const submitHandler = (e) => {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${year}-${month}-${day}`;
    dispatch(registerDocument(title,text,currentDate))
  }

  const submitImage = (id,e) => {
    setUpLoadImage([...e.target.files])
    console.log(upLoadImage,e.target.files[0])
    dispatch(registerImage(id,e.target.files[0]))
  }
 
  function TextItem({item}) {
    const [textLimit, setTextLimit] = useState(true)
    const textCut = item.text.length>525 ?item.text.slice(0,525):false
    const textCutValue = item.text.slice(0,525)
    const textSplited = item.text.split('##img##')
    const [year, month, day] = item.date.split('-',3)
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

    useLayoutEffect(()=>{
      textLimit && (actualOpen===item._id)? setTextLimit(false):setTextLimit(true)
    },[actualOpen])

    function interpreter() {
      const countVerify = (count) =>{
        if(textSplited.length>count+1 && actualOpen===item._id && imageList.info[count]){
          return(
            <img src={`${baseUrl}${imageList.info[count]?imageList.info[count].image:''}`} alt={'img'}></img>
          )
        }else if(textSplited.length>count+1){
          return(
            <>
              <br></br>
              <label className='addImage' htmlFor='addImage'>+ add Image</label>
              <input type='file' className='none' id='addImage' multiple accept="image/*" onChange={(e) => submitImage(item._id,e)}></input>
            </> 
          )
        }
      }
      return (
        
        <>
        {
          
          textSplited.map((i, index) => 
            <div key={index}>
            {i}
            {countVerify(index)}
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
              {item.title}
            </h1>
            <div>
            <div className='text'>
              <span>
                {(textCut && textLimit) || ((textSplited.length>1) && textLimit)? textCutValue: interpreter()}
              </span>
              
              {
                textCut || textSplited.length>1?
                  textLimit?
                  <button onClick={() => {setActualOpen(item._id)}}><p>...read more</p></button>:
                  <button onClick={() => {setActualOpen(0)}}><p>...read less</p></button>
                :<></>
              }
            </div>
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

  return (
    <div className='container homeItens'>
        <span className='latest'>Latest</span>
        <ul>
        {
          data.map((item,index)=>
            <li key={index}><TextItem item={item}/></li>
          ) 
        }
        </ul>
        <OutsideAlerter hookDisplay={setDisplay}>
          <div className={`createDocument ${display}`}>
            <form onSubmit={submitHandler}>
              <input placeholder='Título' type='text' required value={title} onChange={(e)=>setTitle(e.target.value)}></input>
              <textarea value={text} onChange={(e)=>setText(e.target.value)} placeholder='O que você está estudando?' type='text' required></textarea>
              <button type='submit'>
                <img src={send} alt='img'></img>
                <p>Enviar</p>
              </button>
            </form>
          </div>
        </OutsideAlerter>

        <div className={`background`}>
          <button className={`buttonMenu ${menuState?'selfClose':'selfOpen'}`} onClick={() => {setMenuState(true);setReadyLoaded(true)}}>
            <img src={menu} alt="menu"></img>
          </button>
          
          <div className={`${
            readyLoaded?
              menuState?'selfOpen':'selfClose':
            'transparent'
            }`}>
            <div className='boxButton'>
              <button className='xbutton' onClick={() =>setMenuState(false)}>
                <img src={xbutton} alt='img'></img>
              </button>
              <button>
                <img src={circle} alt='img'></img>
                <p>Lucas</p>
              </button>
              <button>
                <img src={search} alt='img'></img>
                <p>search</p>
              </button>
              <button onClick={() => setDisplay('block')}>
                <img src={plus} alt='img'></img>
                <p>create</p>
              </button>
              <button>
                <img src={tranding} alt='img'></img>
                <p>trending</p>
              </button>
            </div>
            <div className='base'></div>
          </div>
          <button className='buttonMenu transparent'>
          </button>
        </div>
    </div>
  )
}

export default Home