import React , {useEffect, useLayoutEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from '../../redux/actions/userActions';
import { LoginStyle ,GlobalStyle} from './style'
import loginBackground from '../../assets/images/login-background.jpg'
import { useNavigate, Link } from "react-router-dom";


function Login() {

  const dispatch = useDispatch();
  const [userName, setUserName] = useState('')
  const [userNameError, setUserNameError] = useState(false)
  const [logged, setLogged] = useState(false)
  const [dummyNumber, setDummyNumber] = useState(0)
  const user = useSelector((state) => state.user);
  const { error, loading, data } = user;
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    dispatch(getUserAction(userName === '' ? null : userName)).then(() => {
      setDummyNumber(Math.random())
      if (data.name === '' || data.name === undefined || data.name === null) {
        setUserNameError(true)
      }
    });
  }

  useLayoutEffect(() => {
    if (data.name === '' || data.name === undefined || data.name === null) {
      
    }else{
      const tokenUser = localStorage.setItem('token',data.name);
      setLogged(true)
      navigate('/');
    }
  }, [dummyNumber]);

  useEffect(() => {
    const tokenUser = localStorage.getItem('token')
    if ( tokenUser !== '' && tokenUser !== undefined && tokenUser !== null) {
     
      navigate('/')
    }
  }, []);

  return (
    <>
    <GlobalStyle />
    {!logged && <LoginStyle>
      <div className='divImage'>
        <img src={loginBackground} alt='login'></img>
      </div>
      <main>
        <div className='loginContainer'>
          <form onSubmit={handleFormSubmit}>
            <div className='title'>
              <h1>Welcome</h1>
              <h2>Let's log you quickly</h2>
            </div>
            {userNameError && <p style={{color:'#FF0000'}}>* Usuário desconhecido</p>}
            <input placeholder='Enter your username' value={userName} onChange={(e) => {setUserName(e.target.value); setUserNameError(false)}}></input>

            <div className='buttons'>
              <button type="submit">
                LOGIN
              </button>
              <div className='links'>
                <p>don't have an account<span>?</span></p>
                <Link to='/subscribe'>sign-up</Link>
              </div>
            </div>
          </form>
        </div>
      </main>
    </LoginStyle>}
    </>
  )
}

export default Login