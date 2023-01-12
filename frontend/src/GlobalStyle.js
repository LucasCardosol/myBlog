import { createGlobalStyle } from 'styled-components';

 //font-family: 'DM Serif Display', serif;
 //font-family: 'Lexend Deca', sans-serif;

const GlobalStyle = createGlobalStyle`    
    body{
        background-color: #272727;
        padding-top: 100px;
        padding-bottom: 180px;
        overflow-x: hidden;
        
    }
    div,body,textArea{
        ::-webkit-scrollbar-track {
            background-color: #272727;
        }
        ::-webkit-scrollbar {
            width: 6px;
            background-color:red;
        }
        ::-webkit-scrollbar-thumb {
            background: rgba(110, 235, 131, 1);;
        }
    }
    input, textArea , select , option{
        outline: none;
        font-family: 'Lexend Deca', sans-serif;
        color: white;
        font-size: 1.2rem;
        font-weight: 200;
    }
    input, textArea, select{
            background-color: transparent;
            border: 1px solid rgba(110, 235, 131, 1);
            padding: 8px;
            ::placeholder{
                color: white;
            }
        }
    ul{
        list-style-type: none;
        margin: 0;
    }
    .listItems{
        margin-top: 40px;
    }
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        border: none;
        cursor: pointer;
        transition: 0.3s;
        border-radius: 6px;
        padding: 8px 16px;
        width: auto;
    }
    h1{
        font-size: 32px;
        line-height: 43.87px;
        margin: 0;
        font-weight: 400;
    }
    p{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        font-weight: 200;
        line-height: 25px;
        color: white;
        margin: 0;
        text-align: justify;
    }
    .container{
        width: 90%;
        max-width: 1024px;
        margin: 0 auto;
    }
    .homeItens{
        ul{
            display: flex;
            flex-direction: column;
            gap: 33px;
        }
        .latest{
            width: 65px;
            height: 33px;
            position: relative;
            font-family: 'Lexend Deca';
            font-size: 20px;
            font-weight: 400;
            line-height: 25px;
            letter-spacing: 0em;
            text-align: left;
            color: white;
            margin-left: 68px;
            ::after{
                content: '';
                position: absolute;
                width: 20px;
                height: 4px;
                background-color: rgba(110, 235, 131, 1);
                color: rgba(110, 235, 131, 1);
                margin-top: -8px;
                left: calc(50% - 10px);
            }
        }
    }
    .dmSerif{
        font-family: 'DM Serif Display', serif;
        color:rgba(110, 235, 131, 1);
        font-weight: 400;
        line-height: 43.87px;
    }
    .lexend{
        font-family: 'Lexend Deca', sans-serif;
        color: white;
    }
    .date{
        font-weight: 600;
        line-height: 40px;
    }
    .background{
        height: 145px;
        width: 100%;
        position: fixed;
        bottom: 0;
        left:35px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 120px;
        .base{
            width: 860px;
            max-width: 860px;
            margin: 0 auto;
            height: 40px;
            background-color: #272727;
        }
        .boxButton{
            width: 100%;
            max-width: 860px;
            margin: 0 auto;
            height: 95px;
            border: 1px solid rgba(110, 235, 131, 1);
            margin-top: 10px;
            background-color: #272727;
            display: flex;
            justify-content: space-around;
            align-items: center;
            position: relative;
            button{
                height: 50px;
                display: flex;
                gap:14px;
                
                .tagIcon{
                    height: 35px;
                }
                :hover{
                    background-color: rgba(0, 0, 0, 0.2);
                }
            }
            .xbutton{
                padding: 0;
                position: absolute;
                top: 0;
                right: 0;
                background-color: rgba(110, 235, 131, 1);
                height: 20px;
                width: 20px;
                margin: 5px;
                border-radius: 5px;
                justify-content: center;
                align-items: center;
                :hover{
                    background-color: rgba(110, 235, 131, 1);
                }
                img{
                    height: 15px;
                }
            }
        }
    }
    .buttonMenu{
        height: 60px;
        width: 60px;
        border-radius: 100px;
        background-color: rgba(110, 235, 131, 1);
        img{
            width: 30px;
        }
    }
    @keyframes selfOpenAnimation{
        from {opacity:0}
        to {opacity:1}
    }
    @keyframes selfCloseAnimation{
        from {opacity:1}
        to {opacity:0}
    }

    .selfClose{
        animation-name: selfCloseAnimation;
        animation-duration: 0.3s;
        opacity: 0;
        pointer-events: none;
        
    }
    .selfOpen{
        animation-name: selfOpenAnimation;
        animation-duration: 0.3s;
        opacity:1;
        pointer-events: auto;
    }
    .transparent{
        opacity: 0;
        cursor: default;
        pointer-events: none;
    }
    .none{
        display: none;
    }
    .block{
        display: block;
    }
    
    .createDocument{
        position: fixed;
        width: 573px;
        height: 70vh;
        background-color: #272727;
        bottom: 135px;
        left: calc(50% - 274px);
        padding: 15px;
        padding-right: 27px;
        border: 1px solid rgba(110, 235, 131, 1);
        overflow-y: scroll;
        overflow-x: hidden;
        
        div{
            display: flex;
            justify-content: space-between;
            width: 100%;
            gap: 15px;
        }
        select, option{
            color:white;
            font-family: 'Lexend Deca', sans-serif;
            background-color: #272727;
            max-width: 150px;
            margin-right: -17px;
            :hover{
                background-color: rgba(0, 0, 0, 0.2);
            }
            cursor: pointer;
        }
        option{
            max-width: none;
        }
        form{
            display: flex;
            flex-direction:column ;
            gap: 15px;
        }
        button{
            gap:14px;
            width: 150px;
            margin: 0 auto;
            :hover{
                background-color: rgba(0, 0, 0, 0.2);
            }
        }
        img{
            height: 40px;
        }
        
        input{
            flex: 1
        }
        textArea{
            width: 100%;
            height: 45vh;
            resize: none;
            
        }
        
    }
    .addImage{
        height: 30px;
        font-size: 13px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 500;
        text-align: center;
        padding: 7px 18px;
        border-radius: 100px;
        border: 1px solid rgba(110, 235, 131, 1);
        color: rgba(110, 235, 131, 1);
        cursor: pointer;
        
    }
    
    .text{
        img{
            
            max-width: 100%;
            margin: 15px 100% 15px 0;
            
        }
    }
    .alertBackground{
        position: fixed;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.75);
        top: 0;
        left: 0;
        z-index: 10;
        .alertWindow{
            width: 312px;
            height: 156px;
            background-color:red;
            margin: auto;
            margin-top: calc(50vh - 75px);
            border: 1px solid rgba(110, 235, 131, 1);
            background-color: #272727;
            p{
                padding: 28px 28px 8px 28px;
            }
        }
    }
    .divButtons{
        display: flex;
        justify-content: start;
        gap:16px;
        padding-left: 88px;
        margin-top: 12px;
        button, select{
            height: 30px;
            font-size: 13px;
            font-family: 'Lexend Deca', sans-serif;
            font-weight: 500;
            text-align: center;
            padding: 7px 18px;
            border-radius: 100px;
            border: 1px solid rgba(110, 235, 131, 1);
            color: rgba(110, 235, 131, 1);
            transition: 0s;
            background-color: #272727;
            :hover{
                background-color: rgba(0, 0, 0, 0.4);
                cursor: pointer;
            }
            :active{
                background-color: black;
            }
        }
        select{
            :hover{
                background-color: rgba(0, 0, 0, 0.8); 
            }
        }
    }
    .pagination{
        padding: 0;
        margin-top: 66px !important;
        justify-content: center;
    }
    .addTag{
        position: fixed;
        width: 573px;
        height: 70vh;
        background-color: #272727;
        bottom: 135px;
        left: calc(50% - 274px);
        padding: 15px;
        border: 1px solid rgba(110, 235, 131, 1);
        .inputArea{
            display: flex;
            justify-content: space-between;
            gap: 13px;
            width: 100%;
            input{
                flex: 1;
            }
            button{
            background-color: transparent;
            border: 1px solid rgba(110, 235, 131, 1);
            outline: none;
            padding: 8px;
            border-radius: 0;
            :hover{
                background-color: rgba(0, 0, 0, 0.5); 
            }
        }
        }
        .tags{
            height: 395px;
            width: 98%;
            border: 1px solid rgba(110, 235, 131, 1);
            margin-top: 13px;
            overflow-y: scroll;
            padding: 7.5px 0 0 7.5px;
        }
        .tag{
            height: 25px;
            border: 1px solid rgba(110, 235, 131, 1);
            outline: none;
            padding: 8px;
            display: inline-block;
            margin-right: 7.5px;
            margin-bottom: 6.5px;
            img{
                color: white;
            }
            button{
                float: right;
            }
            p{
                float: left;
            }
            
        }
        
        
    }
    @media (min-width: 769px) and (max-width: 1440px) {
        .background{
            left: 25px;
        }
        .boxButton{
            height: 75px !important;
            margin-top: 30px !important;
        }
    }
    @media (max-width: 769px) {
        .background{
            left: 0;

        }
        .boxButton{
            height: 55px !important;
            margin-top: 50px !important;
            width: 50%;
            img{
                height:30px ;
            }
        }
    }
`;
export default GlobalStyle;