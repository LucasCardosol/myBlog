import React, { useState, useEffect } from 'react'
import { LoginStyle , GlobalStyle} from './style';
import loginBackground from '../../assets/images/login-background.jpg'
import { Link } from 'react-router-dom';
import { registerUser } from '../../redux/actions/userActions';
import { useDispatch , useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import bell from '../../assets/images/notifications_active.svg'

function Subscribe() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [name , setName] = useState('')
  const [submit, setSubmit] = useState(false)
  const userSend = useSelector((state) => state.userSend);
  const { error } = userSend;
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(name))
    setSubmit(true)
  }

  useEffect(() => {
    const tokenUser = localStorage.getItem('token')
    if ( tokenUser !== '' && tokenUser !== undefined && tokenUser !== null) {
     
      navigate('/')
    }
  }, []);

  return (
    <>
    <GlobalStyle />
    <LoginStyle>
      <div className='divImage'>
        <img src={loginBackground} alt='login'></img>
      </div>
      <main>
        
        <div className='loginContainer' >
          {submit && 
          <div className='boxMessage' style={{backgroundColor:`${error ? '#FF0000': 'rgba(110, 235, 131, 1)'}`}}>
            <div className='Message'>
              { 
                error 
                ?
                <>
                <p style={{color: 'white'}}>FAIL</p>
                <p>it can't be blank or already exists</p>
                </>
                :
                <>
                <p style={{color: 'rgba(0, 0, 0, 1)'}}>SUCCESS</p>
                <p>You can Log-in now.</p>
                </>
              }
            </div>
            <div>
              <img src={bell} alt='bell'></img>
            </div>
          </div>
          }

          <form onSubmit={handleFormSubmit}>
            <div className='title'>
              <h1>Welcome</h1>
              <h2>Let's sign you up quickly</h2>
            </div>
          
            <input placeholder='Enter your username' value={name} onChange={(e) => setName(e.target.value)}></input>

            <div className='buttons'>
              <button type="submit">
                SUBMIT
              </button>
              <div className='links'>
                <p>already have an account<span>?</span></p>
                <Link to='/login'>log-in</Link>
              </div>
            </div>
          </form>
        </div>
      </main>
    </LoginStyle>
    </>
  )
}

export default Subscribe