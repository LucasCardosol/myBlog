import React , {useEffect, useState , useLayoutEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDocumentsAction,registerDocument,getImagesAction ,registerImage, deleteDocument, updateDocument} from '../../redux/actions/documentActions'

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
  const [alertWindow, setAlertWindow] = useState('none')
  const [actualEdit, setActualEdit] = useState(0)
  const [editOrCreate, setEditOrCreate] = useState('')
  const [page, setPage] = useState(0)
  const [limit, setLimit] = useState(3)
  const baseUrl = "http://127.0.0.1:8000/static"
  const dataFiltered = data[0] ? data[0] : []
  const realLenData = data[1] ? data[1] : 0

  
  useEffect(()=>{
    dispatch(getDocumentsAction(page,limit))
  },[dispatch,page])
  
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
  const submitEditHandler = (e) => {
    dispatch(updateDocument(title,text,actualEdit))
  }

  const deleteDocHandler = (id) =>{
    dispatch(deleteDocument(id))
    window.location.reload(false);
  }
  const submitImage = (id,e,order) => {
    setUpLoadImage([...e.target.files])
    dispatch(registerImage(id,e.target.files[0],order))
    setActualOpen(id)
    window.location.reload(false);
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
        
        if(textSplited.length>count+1 && actualOpen===item._id && imageList.info.length>0){
          var verify = false
          var position = 0
          for(var i = 0; i<imageList.info.length; i++){
            if(imageList.info[i].order===count+1){
              verify = true
              position = i
              break
            }
          }
          return(
            verify
            ?<img src={`${baseUrl}${imageList.info[position]?imageList.info[position].image:''}`} alt={'img'}></img>
            :<>
            <br></br>
            <label className='addImage' htmlFor='addImage'>+ add Image</label>
            <input type='file' className='none' id='addImage' multiple accept="image/*" onChange={(e) => submitImage(item._id,e,count+1)}></input>
            </> 
          )
        }else if(textSplited.length>count+1){
          
          return(
            <>
              <br></br>
              <label className='addImage' htmlFor='addImage'>+ add Image</label>
              <input type='file' className='none' id='addImage' multiple accept="image/*" onChange={(e) => submitImage(item._id,e,count+1)}></input>
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
            <h1 className='lexend date'>{day}<br/>{listMonths[month]}</h1>
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
            <button onClick={() => {setActualEdit(item._id);setMenuState(true);setReadyLoaded(true);setEditOrCreate('edit');setTitle(item.title);setText(item.text);setDisplay('')}}>Editar</button>
            <button onClick={() => {setActualEdit(item._id);setAlertWindow('')}}>Excluir</button>
          </div>
        </div>
      </ItemStyle>
    )
  }

  return (
    <div className='container homeItens'>
        <span className='latest'>Latest</span>
        <ul className='listItems'>
        {
          dataFiltered.map((item,index)=>
            <li key={index}><TextItem item={item}/></li>
          ) 
        }
        </ul>
        <div className='divButtons pagination' style={{margin: '0 auto'}}>
          <button onClick={() => {setPage(page*limit!==0 ?page-1:page)}}>{'<'}</button>
          <select value={limit} onChange={(e) => {setLimit(e.target.value);dispatch(getDocumentsAction(page,e.target.value))}} name="select">
            <option value={3}>3</option>
            <option value={6}>6</option>
            <option value={9}>9</option>
            <option value={12}>12</option>
          </select>
          <button onClick={() => setPage(realLenData>(page+1)*limit?page+1:page)}>{'>'}</button>
        </div>
        <OutsideAlerter hookDisplay={setDisplay} >
          <div className={`createDocument ${display}`}>
            <form onSubmit={editOrCreate==='create'?submitHandler: submitEditHandler}>
              <input placeholder='Título' type='text' required value={title} onChange={(e)=>setTitle(e.target.value)}></input>
              <textarea value={text} onChange={(e)=>setText(e.target.value)} placeholder='O que você está estudando?' type='text' required></textarea>
              <button type='submit'>
                <img src={send} alt='img'></img>
                <p>Enviar</p>
              </button>
            </form>
          </div>
        </OutsideAlerter>
        <div className={`alertBackground ${alertWindow}`}>
          <OutsideAlerter hookDisplay={setAlertWindow}>
            <div className='alertWindow'>
              <p>Tem certeza de que deseja excluir o item?</p>
              <div className='divButtons'>
                <button onClick={() => deleteDocHandler(actualEdit)}>Sim</button>
                <button onClick={() => setAlertWindow('none')}>Não</button>
              </div>
            </div>
          </OutsideAlerter>
        </div>
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
              <button onClick={() => {setDisplay('block');setTitle('');setText('');setEditOrCreate('create')}}>
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