import styled from "styled-components";

export const ItemStyle = styled.div`
    width: 966px;
    .boxText{
        display: flex;
        .dateArea{
            text-align: right;
            margin-right: 17px;
            h1{
                margin-bottom: 14px;
                line-height: 40px;
            }
            span{
                writing-mode:vertical-rl;
                transform: rotate(-180deg);
                line-height: 20px;
            }
            
        }
        .textArea{
            max-width: 872px;
            span{
                font-family: 'Lexend Deca', sans-serif;
                font-size: 1.2rem;
                font-weight: 200;
                line-height: 25px;
                color: white;
                margin: 0;
                
            }
            .dmSerif{
                margin-bottom: 19px;
            }
            button{
                display: inline;
                p{
                    color: rgba(110, 235, 131, 1);
                }
            }
        }
    }
    .divButtons{
        display: flex;
        justify-content: start;
        gap:16px;
        padding-left: 88px;
        margin-top: 12px;
        button{
            height: 30px;
            font-size: 13px;
            font-family: 'Lexend Deca', sans-serif;
            font-weight: 500;
            text-align: center;
            padding: 7px 18px;
            border-radius: 100px;
            border: 1px solid rgba(110, 235, 131, 1);
            color: rgba(110, 235, 131, 1);
        }
    }
`