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
                font-size: 20px;
                font-weight: 300;
                line-height: 25px;
                color: white;
                margin: 0;
            }
            button{
                padding-left: 2px;
                padding-top:0 ;
                font-size: 20px;
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
    
`