import React, { useState } from 'react'
import OutsideAlerter from '../OutsideAlerter'
import send from '../../assets/images/send.svg'

function SearchArea(props) {
  const [filterPermission , setFilterPermission] = useState(false)
  
 function search(){
   
    props.setPage(0)
    props.getDocument(filterPermission, 'search')
  }
  
  return (
    <OutsideAlerter hookDisplay={props.setSearchArea} >
      <div className={`searchArea ${props.searchArea}`}>
        <div className='inputArea'>
          <div className='inputs'>
            <input placeholder='Title' value={props.titleFilter} onChange={(e) => props.setTitleFilter(e.target.value)}></input>
            <select value={props.tagFilter?props.tagFilter:0} onChange={(e) => props.setTagFilter(e.target.value)}>
              
              <option value={0}>Tag name</option>
              {props.tagList.data.map((item, index)=>
              
              <option key={index} value={item._id}>{item.name}</option>
              )}
            </select>
          </div>
          <div className='checkbox'>
            <p>Apply Filter?</p>
            <label htmlFor='applyFilter'>
              <div className={`sliderButton ${filterPermission?'on':'off'}`}>
                <p className={filterPermission?'yes':'no'}>
                  {filterPermission?'yes':'no'}
                </p>
              </div>
            </label>
           
            <input checked={filterPermission} onChange={(e) => {setFilterPermission(!filterPermission)}} type='checkbox' id='applyFilter'></input>
          </div>
        </div>
        <button onClick={search}>
          <img src={send} alt='img'></img>
          <p>Apply</p>
        </button>
      </div>
    </OutsideAlerter>
  )
}

export default SearchArea