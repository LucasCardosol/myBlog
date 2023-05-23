import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const LoginStyle = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    .divImage{
      height: 100%;
      img{
        height: 100%;
        object-fit: cover;
        border-right: 4px rgba(110, 235, 131, 1) solid;
      }
    }
    main{
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .loginContainer{
      height: 357px;
      width: 600px;
    }
    form{
      width: 100%;
    }
    h1{
      font-family: DM Serif Display;
      font-size: 48px;
      font-weight: 400;
      line-height: 66px;
      letter-spacing: 0em;
      text-align: left;
      color: rgba(255, 255, 255, 1);
    }
    h2{
      margin: 0;
      font-family: Lexend Deca;
      font-size: 24px;
      font-weight: 300;
      line-height: 30px;
      letter-spacing: 0em;
      text-align: left;
      color:rgba(165, 165, 165, 1)
    }
    .title{
      margin-bottom: 37px;
    }
    input{
      width: 100%;
      padding: 20px 30px;
      font-family: Lexend Deca;
      font-size: 16px;
      font-weight: 300;
      line-height: 20px;
      letter-spacing: 0em;
      text-align: left;
      margin-bottom: 22px;
      ::placeholder{
        font-family: Lexend Deca;
        font-size: 16px;
        font-weight: 300;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
        color:rgba(165, 165, 165, 1);
      }
    }
    .buttons{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .links{
      p,a{
        font-family: Lexend Deca;
      font-size: 20px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0em;
      text-align: left;
      }
      span,a{
        color: rgba(110, 235, 131, 1);
      }

    }
    button{
      background-color: rgba(110, 235, 131, 1);
      font-family: Lexend Deca;
      font-size: 20px;
      font-weight: 600;
      line-height: 25px;
      letter-spacing: 0em;
      text-align: left;
      padding: 18px 55px;
      border-radius: 0;
      color:#272727;
    }
    @media (max-width: 769px) {
      .divImage{
        display: none;
      }
      .title{
        h1,h2{
          text-align: center;
        }
      }
      .loginContainer{
        height: auto;
        width: 100%;
        padding: 0px 42px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .buttons{
        flex-direction: column;
        align-items: flex-start;
        gap: 50px;
      }
    }
    .boxMessage{
      background-color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 24px;
      max-width: 364px;
      width: 364px;
      position: fixed;
      top: 44px;
      right: 73px;
      p{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
        
      }
    }
    @media (max-width: 769px) {
      body{
        
        overflow-y: scroll !important;
        width: 100%;
      }
    }
`


 //font-family: 'DM Serif Display', serif;
 //font-family: 'Lexend Deca', sans-serif;

export const GlobalStyle = createGlobalStyle`
  body{
    padding: 0 !important;
    margin: 0 !important;
   
  }
  @media (max-width: 769px) {
    body{
      
      overflow-y: scroll !important;
      width: 100%;
    }
  }
`




