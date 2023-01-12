import React , {useEffect, useState , useLayoutEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getDocumentsAction,registerDocument,getImagesAction ,registerImage, deleteDocument, updateDocument} from '../../redux/actions/documentActions'
import { getTags ,registerTag, deleteTag} from '../../redux/actions/tagActions'
import { ItemStyle } from './style'
import OutsideAlerter from '../../components/OutsideAlerter'
import plus from '../../assets/images/plus.svg'
import search from '../../assets/images/search.svg'
import circle from '../../assets/images/Ellipse.svg'
import menu from '../../assets/images/menu.png'
import xbutton from '../../assets/images/x.svg'
import send from '../../assets/images/send.svg'
import tagIcon from '../../assets/images/tagicon.svg'

function Home() {
  //inputs states
  const [title,setTitle] = useState('')
  const [text,setText] = useState('')
  const [tag, setTag] = useState('')
  const [tagName, setTagName] = useState('')
  //redux and data states
  const baseUrl = "http://127.0.0.1:8000/static"
  const dispatch = useDispatch()
  const documentList = useSelector(state => state.documentList)
  const {error, loading, data} = documentList
  const imageList = useSelector(state => state.imageList)
  const tagList = useSelector(state => state.tagList)
  const dataFiltered = data[0] ? data[0] : []
  const realLenData = data[1] ? data[1] : 0
  
  //layout states
  const [display, setDisplay] = useState('none')
  const [addTag, setAddTag] = useState('none')
  const [actualOpen,setActualOpen] = useState(0)
  const [upLoadImage,setUpLoadImage] = useState([])
  const [menuState, setMenuState] = useState(false)
  const [readyLoaded, setReadyLoaded] = useState(false)
  const [alertWindow, setAlertWindow] = useState('none')
  const [actualEdit, setActualEdit] = useState(0)
  const [editOrCreate, setEditOrCreate] = useState('')
  const [page, setPage] = useState(0)
  const [limit, setLimit] = useState(3)
  const [detectImageUpload, setDetectImageUpload] = useState(false)

  useEffect(()=>{
    dispatch(getDocumentsAction(page,limit))
  },[dispatch,page, detectImageUpload])
  
  useEffect(()=>{
    dispatch(getTags())
   
  },[dispatch])

  useLayoutEffect(()=>{
    if(actualOpen !== 0){dispatch(getImagesAction(actualOpen))}
  },[actualOpen])

  const submitHandler = (e) => {
    e.preventDefault()
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${year}-${month}-${day}`;
    dispatch(registerDocument(title,text,currentDate,tag))
    dispatch(getDocumentsAction(page,limit))
    setDisplay('none')
  }

  const submitTagHandler = async (e) => {
    e.preventDefault()
    await dispatch(registerTag(tagName))
    dispatch(getTags())
    setTagName('')
  }

  const submitEditHandler = (e) => {
    e.preventDefault()
    dispatch(updateDocument(title,text,actualEdit,tag))
    console.log(tag)
    dispatch(getDocumentsAction(page,limit))
    setDisplay('none')
  }

  const deleteDocHandler = (id) =>{
    dispatch(deleteDocument(id))
    dispatch(getDocumentsAction(page,limit))
  }

  const deleteTagHandler = async (id) =>{
    await dispatch(deleteTag(id))
    dispatch(getTags())

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
            <button onClick={() => {
              setActualEdit(item._id);
              setMenuState(true);
              setReadyLoaded(true);
              setEditOrCreate('edit');
              setTitle(item.title);
              setText(item.text);
              setTag(item.tag);
              setDisplay('');}}>
                Editar
            </button>
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
          <button disabled>page: {page+1}</button>
          <select value={limit} onChange={(e) => {setLimit(e.target.value);setPage(0);dispatch(getDocumentsAction(page,e.target.value))}} name="select">
            <option value={1}>1 rows</option>
            <option value={3}>3 rows</option>
            <option value={6}>6 rows</option>
            <option value={9}>9 rows</option>
            <option value={12}>12 rows</option>
          </select>
          <button onClick={() => setPage(realLenData>(page+1)*limit?page+1:page)}>{'>'}</button>
        </div>

        <OutsideAlerter hookDisplay={setDisplay} >
          <div className={`createDocument ${display}`}>
            <form onSubmit={editOrCreate==='create'?submitHandler: submitEditHandler}>
              <div>
                <input placeholder='Título' type='text' required value={title} onChange={(e)=>setTitle(e.target.value)}></input>
                <select value={tag?tag:0} onChange={(e) => setTag(e.target.value)}>
                  
                  <option value={0}>Tag name</option>
                  {tagList.data.map((item, index)=>
                  
                  <option key={index} value={item._id}>{item.name}</option>
                  )}
                </select>
              </div>
              <textarea value={text} onChange={(e)=>setText(e.target.value)} placeholder='What are you studyng?' type='text' required></textarea>
              <button type='submit'>
                <img src={send} alt='img'></img>
                <p>Enviar</p>
              </button>
            </form>
          </div>
        </OutsideAlerter>
        
        <OutsideAlerter hookDisplay={setAddTag} >
          <div className={`addTag ${addTag}`}>
            <form onSubmit={submitTagHandler}>
              <div className='inputArea'>
                <input placeholder='Create tag here' value={tagName} onChange={(e)=>setTagName(e.target.value)} required></input>
                <button type='submit'><p>Add tag</p></button>
              </div>
            </form>
            <div className='tags'>
              {
                tagList.data.map((item, index)=>
                  <div key={index} className='tag'>
                    <p>{item.name}</p>
                    <button onClick={() => deleteTagHandler(item._id)}>x</button>
                  </div>
                  )
              }
            </div>
          </div>
        </OutsideAlerter>

        <div className={`alertBackground ${alertWindow}`}>
          <OutsideAlerter hookDisplay={setAlertWindow}>
            <div className='alertWindow'>
              <p>Tem certeza de que deseja excluir o item?</p>
              <div className='divButtons'>
                <button onClick={() => {deleteDocHandler(actualEdit);setAlertWindow('none')}}>Sim</button>
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
              <button onClick={() => {setTag(0);setDisplay('block');setTitle('');setText('');setEditOrCreate('create')}}>
                <img src={plus} alt='img'></img>
                <p>create</p>
              </button>
              <button onClick={() => setAddTag('block')}>
                <img className='tagIcon' src={tagIcon} alt='img'></img>
                <p>tags</p>
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