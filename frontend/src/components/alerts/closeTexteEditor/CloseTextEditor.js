import React  from 'react'
import OutsideAlerter from '../../OutsideAlerter'

function CloseTextEditor(props) {
  return (
    <div className={`alertBackground ${props.alertWindow}`}>
      <OutsideAlerter hookDisplay={props.setAlertWindow}>
        <div className='alertWindow'>
          <p>Ao realizar essa ação, perderá todo o texto digitado, tem certeza?</p>
          <div className='divButtons'>
            <button onClick={() => {
              props.setAlertWindow("none");
              props.setEditOrCreate("");
              props.setDisplay("none")
              }  
            }>
                Sim</button>
            <button onClick={() => props.setAlertWindow("none")}>Não</button>
          </div>
        </div>
      </OutsideAlerter>
    </div>
  )
}

export default CloseTextEditor