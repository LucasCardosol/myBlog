import React , {useEffect, useState , useLayoutEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CodeBlock, atomOneDark } from "react-code-blocks";

import { getCodes} from '../../redux/actions/codeActions';
import { getTags} from '../../redux/actions/tagActions'
import { getDocumentsAction,getImagesAction ,registerImage} from '../../redux/actions/documentActions'
import { ItemStyle } from './style'
import CreateText from '../../components/CreateText';
import CreateTag from '../../components/CreateTag';
import SearchArea from '../../components/SearchArea';
import CodeWriter from '../../components/CodeWriter';

import plus from '../../assets/images/plus.svg'
import search from '../../assets/images/search.svg'
import circle from '../../assets/images/Ellipse.svg'
import menu from '../../assets/images/menu.png'
import xbutton from '../../assets/images/x.svg'
import tagIcon from '../../assets/images/tagicon.svg'
import DeleteWindow from '../../components/alerts/deleteWindow';
const textCode = `myVar =  input('Digite algo')\r\ndef lucas(argumento): a = 'b'`


function Home() {
  //inputs states
  const [title,setTitle] = useState('')
  const [text,setText] = useState('')
  const [tag, setTag] = useState('')
  const [applyFilter,setApplyFilter] = useState(false)
  const [titleFilter, setTitleFilter] = useState('')
  const [tagFilter, setTagFilter] = useState('0')
 
  //redux and data states
  const baseUrl = "http://127.0.0.1:8000/static"
  const dispatch = useDispatch()
  const documentList = useSelector(state => state.documentList)
  const {error, loading, data} = documentList
  const imageList = useSelector(state => state.imageList)
  const tagList = useSelector(state => state.tagList)
  const codeList = useSelector(state => state.codeList)
  const dataFiltered = data[0] ? data[0] : []
  const realLenData = data[1] ? data[1] : 0
  
  //layout states
  const [alertWindow, setAlertWindow] = useState('none')
  const [display, setDisplay] = useState('none')
  const [addTag, setAddTag] = useState('none')
  const [searchArea, setSearchArea] = useState('none')
  const [actualOpen,setActualOpen] = useState(0)
  const [menuState, setMenuState] = useState(false)
  const [readyLoaded, setReadyLoaded] = useState(false)
  const [actualEdit, setActualEdit] = useState(0)
  const [editOrCreate, setEditOrCreate] = useState('')
  const [page, setPage] = useState(0)
  const [limit, setLimit] = useState(3)
  const [detectImageUpload, setDetectImageUpload] = useState(false)

  const getDocument = () => {
    applyFilter
    ? dispatch(getDocumentsAction(page,limit,tagFilter,titleFilter))
    : dispatch(getDocumentsAction(page,limit,0,''))
  }

  const submitImage = (id,e,order) => {
    dispatch(registerImage(id,e.target.files[0],order))
    setActualOpen(id)
    setDetectImageUpload(true)
    window.location.reload(false);
  }
  
  
  
  function MyCoolCodeBlock(props) {
    let text = props.text.split(',-,')
    return (
      <div className='codeBlock'>
      {
        text.map((item, index) =>
          <CodeBlock
          key = {index}
          text={props.text}
          language={props.language}
          showLineNumbers={false}
          theme={atomOneDark}
          actualEdit = {actualEdit}
      />
        )
      }
      </div>
    );
  }

  function TextItem({item}) {
    const [textLimit, setTextLimit] = useState(true)
    const textSplitedRemoving = item.text.split(/##img##|##code##/)
    const textSplited = item.text.split(/(##img##)|(##code##)/)
    const textCutBoolean = item.text.length>525 ?true:false
    const textCutValue = textSplitedRemoving.join('').slice(0,525)
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
      const imgExist = imageList.info.length>0
      function returnInterpreter(i,index){
        if (i === "##img##"){
          const image = imageList.info.find(element => element.order===index)? imageList.info.find(element => element.order===index).image: false
          if (image){
            return (
              <img src={`${baseUrl}${image}`} alt={'img'}></img>
            )
          }else {
            return(
              <>
                <br></br>
                <label className='addImage' htmlFor='addImage'>+ add Image</label>
                <input type='file' className='none' id='addImage' multiple accept="image/*" onChange={(e) => submitImage(item._id,e,index)}></input>
            </> 
            )
          }
        } else if (i === "##code##"){
          const code = codeList.data.find(element => element.order===index)? codeList.data.find(element => element.order===index): false
          if (code){
            return (
              <MyCoolCodeBlock
                text={code.code}
                language={code.language}
                className='codeBlock'
            />
            )
          }else {
            return(
              <>
              {console.log(actualOpen,index)}
              <CodeWriter
                document={actualOpen}
                order={index}
              />
              </>
            )
          }
        } else {
          return i
        }
      }
      return (
        <>
        {
          textSplited.map((i, index)=>
          <div key={index} >
            {returnInterpreter(i,index)}
          </div>)
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
                {(textCutBoolean && textLimit) || ((textSplited.length>1) && textLimit)? textCutValue: interpreter()}
              </span>
              
              {
                textCutBoolean || textSplited.length>1?
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

  useEffect(()=>{
    getDocument()
  },[dispatch,page, detectImageUpload,limit])
  
  useEffect(()=>{
    dispatch(getTags())
  },[dispatch])

  useLayoutEffect(()=>{
    if(actualOpen !== 0){
      dispatch(getImagesAction(actualOpen))
      dispatch(getCodes(actualOpen))
    }
  },[actualOpen])

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

        {/*<MyCoolCodeBlock
          text={textCode}
          language='python'
          className='codeBlock'
          highlight="1,2"
      />*/}
        
        <div className='divButtons pagination' style={{margin: '0 auto'}}>
          <button onClick={() => {setPage(page*limit!==0 ?page-1:page)}}>{'<'}</button>
          <button disabled>page: {page+1}</button>
          <select value={limit} onChange={(e) => {setLimit(e.target.value);setPage(0)}} name="select">
            <option value={1}>1 rows</option>
            <option value={3}>3 rows</option>
            <option value={6}>6 rows</option>
            <option value={9}>9 rows</option>
            <option value={12}>12 rows</option>
          </select>
          <button onClick={() => setPage(realLenData>(page+1)*limit?page+1:page)}>{'>'}</button>
        </div>

        <CreateText 
          getDocument={getDocument}
          actualEdit = {actualEdit}
          tagList={tagList}
          editOrCreate={editOrCreate}
          setDisplay={setDisplay}
          display={display}
          title={title}
          text={text}
          tag = {tag}
          setTitle={setTitle}
          setText={setText}
          setTag={setTag}
        />
        
        <CreateTag
          setAddTag={setAddTag}
          tagList={tagList}
          addTag={addTag}
        />

        <SearchArea
          setSearchArea={setSearchArea}
          searchArea={searchArea}
          titleFilter={titleFilter}
          setTitleFilter={setTitleFilter}
          tagFilter={tagFilter}
          setTagFilter={setTagFilter}
          tagList={tagList}
          applyFilter={applyFilter}
          setApplyFilter={setApplyFilter}
          getDocument={getDocument}
        />

        <DeleteWindow 
          actualEdit={actualEdit}
          getDocument={getDocument}
          setAlertWindow = {setAlertWindow}
          alertWindow = {alertWindow}
        />

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
              <button onClick={() => setSearchArea('block')}>
                <img src={search} alt='img'></img>
                <p>search</p>
              </button>
              <button onClick={() => {setTag('0');setDisplay('block');setTitle('');setText('');setEditOrCreate('create')}}>
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