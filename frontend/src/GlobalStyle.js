import { createGlobalStyle } from 'styled-components';

 //font-family: 'DM Serif Display', serif;
 //font-family: 'Lexend Deca', sans-serif;

const GlobalStyle = createGlobalStyle`    
    body{
        background-color: #272727;
        padding-top: 100px;
        padding-bottom: 180px;
        
        
    }
    div,body,textarea, select,span{
        ::-webkit-scrollbar-track {
            background-color: #272727;
        }
        ::-webkit-scrollbar {
            height: 6px;
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
            background-color: #272727;
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
    .codeBlock{
        background-color: #282C34;
        padding: 8px;
        
        
    }
    code{
        font-family: 'Consolas', 'Courier New', monospace !important;
        padding: 0 !important;
        padding-right: 8px !important;
        
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
    .xbutton{
        display: flex;
        padding: 0;
        background-color: rgba(110, 235, 131, 1);
        height: 20px;
        width: 20px;
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
            #dropdown-basic{
                
                background-color: transparent ;
                border: none;
                :hover{
                    background-color: rgba(0, 0, 0, 0.2);
                }
            }
            .dropdown-toggle{
                ::after{
                    content: none;
                }
            }
            .circle{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 40px;
                width: 40px;
                border-radius: 40px;
                background-color: rgba(110, 235, 131, 1);
                p{
                    text-transform: uppercase;
                    color: rgba(39, 39, 39, 1);
                    font-family: Lexend Deca;
                    font-size: 20px;
                    font-weight: 400;
                    line-height: 25px;
                    letter-spacing: 0em;
                    text-align: left;
                }
            }
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
                position: absolute;
                top: 0;
                right: 0;
                height: 20px;
                margin: 5px;
                :hover{
                    background-color: rgba(110, 235, 131, 1);
                }
            }
        }
    }
    .buttonMenu{
        position: fixed;
        bottom: 30px;
        left: calc(50% - 600px);
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
        pointer-events: none !important;
        
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
    .flex{
        display: flex;
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
            align-items: center;
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
        .submit{
            gap:14px;
            width: 150px;
            margin: 0 auto;
            :hover{
                background-color: rgba(0, 0, 0, 0.2);
            }
            img{
                height: 40px;
            }
        }
        .xbutton{
            margin-left: 30px;
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
        div{
            white-space: pre-line
        }
        img{
            
            max-width: 100%;
            
            
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
        
        justify-content: center;
        align-items: center;
        .alertWindow{
            width: 312px;
            height: 156px;
            background-color:red;
            
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
    .searchArea{
        position: fixed;
        width: 573px;
        height: 70vh;
        background-color: #272727;
        bottom: 135px;
        left: calc(50% - 274px);
        padding: 15px;
        border: 1px solid rgba(110, 235, 131, 1);
        button{
            
            gap:14px;
            width: 150px;
            margin: 0 auto;
            margin-top: 300px;
            :hover{
                background-color: rgba(0, 0, 0, 0.2);
            }
        }
        img{
            height: 40px;
        }
        .inputArea{
            display: flex;
            gap: 13px;
            div{
                display: flex;
                flex-direction: column;
                gap: 13px;
            }
            .inputs{
                flex: 1;
            }
            
            .checkbox{
                align-items: flex-end;
                p{
                    padding: 8px 0;
                }
                label{
                    height: 40px;
                    width:100%;
                    border: 1px solid rgba(110, 235, 131, 1);
                    cursor: pointer;
                    
                    .sliderButton{
                        height: 100%;
                        width: 50%;
                        transition: 0.5s;
                        z-index: 3;
                        text-align: center !important;
                        p{  
                            transition: 0.5s;
                            display: inline;
                            text-align: center;
                        }
                        .yes{
                            margin-right: -200%;
                        }
                        .no{
                            margin-left: -200%;
                        }
                    }
                    .on{
                        margin-left: 0;
                        background-color:rgba(110, 235, 131, 1) ;
                    }
                    .off{
                        margin-left: 50%;
                        background-color: #DC3545;
                    }
                }
                input{
                    display: none;
                }
            }
        }
    }

    .formCode{
        background-color: #282C34;
        width: 451px;
        padding:8px;
        textarea{
            border: none;
            background-color: transparent;
            min-width: 96%;
            max-width: 96%;
            max-height: 320px;
            min-height: 80px;
        }
        button, select{
            color: #6EEB83;
            border: 1px solid #6EEB83;
            height: 45px;
            border-radius:0;
            padding: 8px !important;
            background-color: transparent;
            cursor: pointer;
        }
        select{
            background-color: #282C34;
        }
        div{
            display: flex;
            flex-direction: row-reverse;
            gap: 8px;
            
        }
    }
    .addTag{
           
            
            .tags{
                height: 300px;
                margin-top: 60px;
            }
            .tag{
                display: inline-flex;
                align-items: center;
                height: 30px;
                gap: 10px;
                button{
                    margin: 0;
                    padding: 0;
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
            background-color: rgba(0, 0, 0, 0.75);
        }
       
        .pagination{
            position: fixed !important;
            bottom: 103px;
            z-index: 4;
            left: calc(50% - 165px);

        }
        .transparent {
            opacity: 1 !important;
            pointer-events: all !important;
            max-width: 100%;
            padding: 0 28px;
            height: auto !important;
        }
        .boxButton{
            width: 100%;
            max-width: 332px !important;
            height: 55px !important;
            margin: 0 auto!important;
            margin-bottom: -40px !important;
            .xbutton{
                display: none !important;
            }
            p{
                display: none;
            }
            .letter{
                display: block;
            }
        }
        .base{
            height: 0px !important;
        }
        .text{
            img{
                margin: 0;
            }
        }
        .formCode{
            width: auto;
            textarea{
                
                max-height: none;
                height: 200px;
            }

        }
        .searchArea, .createDocument {
            width: 300px;
            height: calc(70vh - 30px);
            left: calc(50% - 150px);
            margin-bottom: 30px;
            
            .inputArea{
                flex-direction: column;
                gap: 30px;
            }
            .checkbox{
                align-items: center !important;
                justify-content: center !important;
            }
            button{
                margin-top: 60px;
            }
        }
        .addTag{
            width: 300px;
            height: calc(70vh - 30px);
            left: calc(50% - 150px);
            margin-bottom: 30px;
            .inputArea{
                flex-direction: column;
            }
            .tags{
                height: 300px;
                margin-top: 60px;
            }
            .tag{
                display: inline-flex;
                align-items: center;
                height: 30px;
                gap: 10px;
                button{
                    margin: 0;
                    padding: 0;
                }
            }
        }
        .createDocument{
            padding: 15px;
            form{
                div{
                    flex-direction: column;
                    align-items: flex-start;
                }
                
                input{
                    width: 200px;
                }
                textarea{
                    height: 280px;
                }
            }
            .xbutton{
                position: absolute;
                top: 15px;
                right: 5px;
                margin: 0;
            }
        }
    }
`;
export default GlobalStyle;