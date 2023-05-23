import axios from "axios";
import { 
    CODE_LIST_REQUEST,
    CODE_LIST_SUCCES,
    CODE_LIST_FAIL,
    CODE_POST_REQUEST,
    CODE_POST_SUCCES,
    CODE_POST_FAIL
    
} from "../../constants/ReduxCode"

export const getCodes = (document) => async(dispatch) => {
    try{
        dispatch({type: CODE_LIST_REQUEST })
        const {data} = await axios.get(`api/codes/${document}`)
        
        dispatch({
            type:CODE_LIST_SUCCES,
            payload: data
        })
    }catch(error){
        dispatch({
            type: CODE_LIST_FAIL,
            payload: error.response && error.response.data.message ?
            error.response.data.message : error.message
        })
    }
}

export const postCode = (code,language, order, document) => async(dispatch) => {
    try{
        dispatch({
            type: CODE_POST_REQUEST
        })

        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }

        const {data} = await axios.post(
            '/api/codes/register/',
            {'code':code, 'language':language, 'order':order,'document':document},
            config
            )

        dispatch({
            type:CODE_POST_SUCCES,
            payload: data
        })

    }catch(error){
      
        dispatch({
            type: CODE_POST_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            :error.message
        })
    }
}

