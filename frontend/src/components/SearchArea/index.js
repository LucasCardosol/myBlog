import React from 'react'
import OutsideAlerter from '../OutsideAlerter'
import send from '../../assets/images/send.svg'

function SearchArea(props) {
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
                  <div className={`sliderButton ${props.applyFilter?'on':'off'}`}>
                    <p className={props.applyFilter?'yes':'no'}>
                      {props.applyFilter?'yes':'no'}
                    </p>
                  </div>
                </label>
                <input checked={props.applyFilter} onChange={(e) => props.setApplyFilter(!props.applyFilter)} type='checkbox' id='applyFilter'></input>
              </div>
            </div>
            <button onClick={props.getDocument}>
              <img src={send} alt='img'></img>
                <p>Apply</p>
              </button>
          </div>
        </OutsideAlerter>
  )
}

export default SearchArea